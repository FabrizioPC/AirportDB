import { catchAsync } from "../errors/index.js";
import { FlightService } from "./flight.service.js";

const flightService = new FlightService();

export const validateExistFlight = catchAsync(async (req, res, next) => {
   const { id } = req.params;

   const flight = await flightService.findOneFlight(id);
   if (!flight) {
      return res.status(404).json({
         status: "error",
         message: `Flight not found with id: ${id}`,
      });
   }
   req.flight = flight;
   next();
});
