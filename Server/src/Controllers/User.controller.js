import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken";
const RegisterUser = asyncHandler(async (req, res) => {
  // Getting user detail from frontend
  const { fullName, email, password, Department } = req.body;

  //checking if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { password }],
  });

  if (existedUser) {
    throw new ApiError(
      400,
      "user with this email and password already exists..."
    );
  }

  // Send data to database
  const user = await User.create({
    fullName,
    email,
    password,
    Department,
  });

  const token = await jwt.sign(
    { id: user._id, firstName, lastName, email, Department },
    "jsonwebtokentkey",
    {
      expiresIn: "30d",
    }
  );

  //Data for sending to frontend without password
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(400, "something went wrong while registering the user");
  }

  //send cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .cookie("Token", token, options)
    .json(
      new ApiResponse(200, createdUser, token, "User Created Successfully...")
    );
});

const LoginUser = asyncHandler(async (req, res) => {
  // getting data from frontend
  const { email, password, Department } = req.body;
  //   checking validation
  if (!email || !password || Department) {
    throw new ApiError(400, "All fields are required...!");
  }
  //Checking for existed  user
  const user = await User.findOne({
    $or: [{ email }, { password }],
  });

  if (!user) {
    throw new ApiError(400, "User does not exist...");
  }
  //checking password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Invalid Password...");
  }
  // Generating token
  const token = await jwt.sign({ id: user._id }, "jsonwebtokentkey", {
    expiresIn: "30d",
  });
  //send cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(201)
    .cookie("Token", token, options)
    .json(new ApiResponse(200, token, "User LoggedIn Successfully..."));
});
export { RegisterUser, LoginUser };
