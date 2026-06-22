import express from "express";
import { species, enclosures, care_tips } from "../data/database.js";

//creating a router
const router = express.Router();



//create a GET route to return all the species

router.get("/",(req, res) =>{
    res.json(species)
});

//need to add error handling--maybe if statement or try/catch
router.get("/:id", (req,res) => {
    const speciesId = species.find(species => species.id == req.params.id)

    if (!speciesId) {
       return res.status(404).json({
error: "Species not found"
       })
        
    
    }
    res.json(speciesId)
});

router.post("/", (req,res) =>{
    const newSpecies = {id: Date.now(), ...req.body};
        species.push(newSpecies);

        res.status(201).json(newSpecies);
});


export default router;
