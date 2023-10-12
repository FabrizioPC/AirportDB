import { catchAsync } from "../errors/index.js";
import { validatePlane, validatePartialPlane } from "./plane.schema.js";
import { PlaneService } from "./plane.service.js";

const planeService = new PlaneService();

export const createPlane = catchAsync(async (req, res) => {
   const { hasError, errorMessages, planeData } = validatePlane(req.body);
   if (hasError) {
      return res.status(422).json({
         status: "error",
         messages: errorMessages,
      });
   }
   const plane = await planeService.createPlane(planeData);
   return res.status(201).json(plane);
});
export const findAllPlanes = catchAsync(async (req, res) => {
   const planes = await planeService.findAllPlanes();
   return res.status(200).json(planes);
});
export const findOnePlane = catchAsync(async (req, res) => {
   const { plane } = req;
   return res.status(200).json(plane);
});
export const updatePlane = catchAsync(async (req, res) => {
   const { plane } = req;
   const { hasError, errorMessages, planeData } = validatePartialPlane(
      req.body
   );
   if (hasError) {
      return res.status(422).json({
         status: "error",
         message: errorMessages,
      });
   }
   const planeUpdated = await planeService.updatePlane(plane, planeData);

   return res.status(200).json(planeUpdated);
});
export const deletePlane = catchAsync(async (req, res) => {
   const { plane } = req;
   await planeService.deletePlane(plane);
   return res.status(204).json(null);
});
