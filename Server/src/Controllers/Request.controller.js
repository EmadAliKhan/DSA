import { Data } from "../models/Acc&Rej.model.js";
import { DSA } from "../models/DSAAcc&Rej.model.js";
import { Request } from "../models/SocietyModels/RequestForm.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
//Society Lead Generate the request
const SocietyRequest = asyncHandler(async (req, res) => {
  const { SocietyName, LeadName, EventName, Department, EventDate, Location } =
    req.body;

  try {
    if (
      !(
        SocietyName &&
        LeadName &&
        EventName &&
        EventDate &&
        Location &&
        Department
      )
    ) {
      throw new ApiError(400, "All fields are required for Request..");
    }

    const request = await Request.create({
      SocietyName,
      LeadName,
      EventName,
      EventDate,
      Department,
      Location,
    });

    return res
      .status(200)
      .json(new ApiResponse(200, request, "Request placed Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});
//Chairman will get the request
const GetSocietyRequest = asyncHandler(async (req, res) => {
  try {
    const getReq = await Request.find({});
    if (!getReq) {
      throw new ApiError(400, "Checkout data not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, getReq, "Request retrieve Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});
// Chairman perform the action like (accepted/rejected)
const ChairmanActionRequest = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    if (!id) {
      throw new ApiError(400, "Id Not found... ...");
    }
    // finding the data from table
    const findRequest = await Request.findOne({ _id: id });
    console.log(findRequest);

    //sending data to the Accepted Reservation
    const sendData = await Data.create({
      SocietyName: findRequest.SocietyName,
      LeadName: findRequest.LeadName,
      Department: findRequest.Department,
      EventName: findRequest.EventName,
      EventDate: findRequest.EventDate,
      Location: findRequest.Location,
      status: status,
    });
    //now delete from Table
    await Request.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          sendData,
          "Request send Successfully to Accepted Reservation and deleted from tableReservation..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});
//Action data will be get on the chairman detail page and DSA request Page
const GetChairmanActionRequest = asyncHandler(async (req, res) => {
  try {
    const getActionReq = await Data.find({});
    if (!getActionReq) {
      throw new ApiError(400, "Checkout data not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, getActionReq, "Request placed Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});
//DSA perform an action accepted/rejected
const DSAActionRequest = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    if (!id) {
      throw new ApiError(400, "Id Not found... ...");
    }
    // finding the data from table
    const findRequest = await Data.findOne({ _id: id });
    //sending data to the Accepted Reservation
    const sendData = await DSA.create({
      SocietyName: findRequest.SocietyName,
      LeadName: findRequest.LeadName,
      Department: findRequest.Department,
      EventName: findRequest.EventName,
      EventDate: findRequest.EventDate,
      Location: findRequest.Location,
      status: status,
    });
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          sendData,
          "Request send Successfully to Accepted Reservation and deleted from tableReservation..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});
// DSA action data will be get on the detail page
const GetDSAActionRequest = asyncHandler(async (req, res) => {
  try {
    const getActionReq = await DSA.find({});
    if (!getActionReq) {
      throw new ApiError(400, "Checkout data not Found");
    }
    return res
      .status(200)
      .json(new ApiResponse(200, getActionReq, "Request placed Successfully"));
  } catch (error) {
    throw new ApiError(500, "Server error, please try again later");
  }
});

export {
  SocietyRequest,
  GetSocietyRequest,
  ChairmanActionRequest,
  GetChairmanActionRequest,
  DSAActionRequest,
  GetDSAActionRequest,
};
