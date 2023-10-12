import z from "zod";
import { extractValidationData } from "../common/utils/extractErrorData.js";

export const planeSchema = z.object({
   planeNumber: z.number().positive(),
   model: z.string().min(3).max(100),
   capacity: z.number(),
   airline: z.enum([
      "AeroGlobe",
      "AeroTronix",
      "VelocityAir",
      "AirQuest",
      "StarLinkx",
   ]),
});

export const validatePlane = (data) => {
   const result = planeSchema.safeParse(data);
   const {
      hasError,
      errorMessages,
      data: planeData,
   } = extractValidationData(result);
   return {
      hasError,
      errorMessages,
      planeData,
   };
};
export const validatePartialPlane = (data) => {
   const result = planeSchema.partial().safeParse(data);
   const {
      hasError,
      errorMessages,
      data: planeData,
   } = extractValidationData(result);
   return {
      hasError,
      errorMessages,
      planeData,
   };
};
