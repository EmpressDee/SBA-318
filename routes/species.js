import express from "express";
import { species, enclosures, care_tips } from "../data/database.js";

//creating a router
const router = express.Router();



//create a GET route to return all the species

router.get("/",(req, res) =>{
    res.json(species)
});

router.get("/:id", (req,res) => {
    const speciesId = species.find(species => species.id == req.params.id)
    res.json(speciesId)
})