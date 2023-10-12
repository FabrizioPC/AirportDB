import { Router } from "express";
import {
   findAllCities,
   findOneCity,
   createCity,
   updateCity,
   deleteCity,
} from "./city.controller.js";

import { validateExistCity } from "./city.middleware.js";

export const router = Router();

router.route("/").get(findAllCities).post(createCity);

router
   .route("/:id")
   .get(validateExistCity, findOneCity)
   .patch(validateExistCity, updateCity)
   .delete(validateExistCity, deleteCity);
