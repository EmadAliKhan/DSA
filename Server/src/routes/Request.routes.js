import { Router } from "express";
import {
  ChairmanActionRequest,
  DSAActionRequest,
  GetChairmanActionRequest,
  GetDSAActionRequest,
  GetSocietyRequest,
  SocietyRequest,
} from "../Controllers/Request.controller.js";

const router = Router();
router.route("/request").post(SocietyRequest);
router.route("/getRequest").post(GetSocietyRequest);
router.route("/actionRequest").post(ChairmanActionRequest);
router.route("/getActionRequest").post(GetChairmanActionRequest);
router.route("/DSAAction").post(DSAActionRequest);
router.route("/getDSAAction").post(GetDSAActionRequest);

export default router;
