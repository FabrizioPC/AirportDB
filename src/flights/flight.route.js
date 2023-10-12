import { Router } from "express";

import {
   createFlight,
   findAllFlights,
   findOneFlight,
   updateFlight,
   deleteFlight,
} from "./flight.controller.js";

import { validateExistFlight } from "./flight.middleware.js";

export const router = Router();

router.route("/").get(findAllFlights).post(createFlight);

router
   .route("/:id")
   .get(validateExistFlight, findOneFlight)
   .patch(validateExistFlight, updateFlight)
   .delete(validateExistFlight, deleteFlight);
