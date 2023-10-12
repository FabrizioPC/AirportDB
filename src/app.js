import express from "express";
import { router } from "./routes/routes.js";
import { AppError } from "./errors/appError.js";
import { envs } from "./config/enviroments/enviroments.js";
import { globalErrorHandler } from "./errors/error.controller.js";
import { enableCors } from "./config/plugins/cors.plugin.js";
import { enableMorgan } from "./config/plugins/morgan.plugin.js";

const app = express();
const ACCEPTED_ORIGINS = ["http:://localhost:8080", "http:://localhost:4200"];
//Esto me permite recibir información en formato json
app.use(express.json());

//TODO: Refactorizar
if (envs.NODE_ENV === "development") {
   enableMorgan(app);
}
enableCors(app, ACCEPTED_ORIGINS);
// app.use("/api/v1", passengerRouter);
app.use("/api/v1", router);

app.all("*", (req, res, next) => {
   // return res.status(404).json({
   //    status: "error",
   //    message: `Can't find ${req.originalUrl} on this server!`,
   // });

   // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
   // err.status = "error";
   // err.statusCode = 404;
   // next(err);

   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
export default app;
