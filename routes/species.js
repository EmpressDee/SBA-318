import express from "express";
import { species, enclosures, care_tips } from "../data/database.js";

//creating a router
const router = express.Router();



//create a GET route to return all the species

router.get("/")