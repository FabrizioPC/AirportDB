import { DataTypes } from "sequelize";

import sequelize from "../config/database/database.js";

const Plane = sequelize.define("planes", {
   id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      field: "plane_id",
   },
   planeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "plane_number",
   },
   model: {
      type: DataTypes.STRING(100),
      allowNull: false,
   },
   capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   airline: {
      type: DataTypes.ENUM(
         "AeroGlobe",
         "AeroTronix",
         "VelocityAir",
         "AirQuest",
         "StarLinkx"
      ),
      allowNull: false,
   },
   status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
   },
});
export default Plane;
