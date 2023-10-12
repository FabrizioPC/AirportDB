import { Router } from "express";
import {
   createPassenger,
   deletePassengerById,
   findAllPassengers,
   findOnePassenger,
   updatePassenger,
} from "./passengers.controller.js";

export const router = Router();

//Rutas
router.route("/").get(findAllPassengers).post(createPassenger);
//endpoint 1: obtener todos los pasajeros
// router.get("/passengers", findAllPassengers);
//endpoint 2: crear un pasajero
// router.post("/passengers", createPassenger);
router
   .route("/:id")
   .get(findOnePassenger)
   .patch(updatePassenger)
   .delete(deletePassengerById);
//endpoint3: obtener un pasajeor dado su id
// router.get("/passengers/:id", findOnePassenger);
//endpoint 4: actualizar la información de un pasajero
// router.patch("/passengers/:id", updatePassenger);
//endpoint 5: eliminar la información de un pasajero
// router.delete("/passengers/:id", deletePassengerById);
