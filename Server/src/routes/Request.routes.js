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
router.route("/getRequest").get(GetSocietyRequest);
router.route("/actionRequest/:id").post(ChairmanActionRequest);
router.route("/getActionRequest").get(GetChairmanActionRequest);
router.route("/DSAAction/:id").post(DSAActionRequest);
router.route("/getDSAAction").get(GetDSAActionRequest);

export default router;
