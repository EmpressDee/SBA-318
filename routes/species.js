import express from "express";
import { species, enclosures, care_tips } from "../data/database.js";

//creating a router
const router = express.Router();



//create a GET route to return all the species

router.get("/",(req, res) =>{
    const type = req.query.type;
    if (type) {
        const typeFilter = species.filter(s => s.type === type);
        res.json(typeFilter);
    } else {
        res.json(species)
    }
    
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
    const newSpecies = {id: Date.now(), ...req.body}; // ... spread operator. Avoids having to write every field manually
        species.push(newSpecies);

        res.status(201).json(newSpecies);
});

router.patch("/:id",(req,res) => {
    const speciesIndex = species.findIndex(s => s.id == req.params.id)
    if (speciesIndex === -1) {
        return res.status(404).json({
            error: "Couldnt find a match"
        })
    }
    species[speciesIndex] = { ...species[speciesIndex], ...req.body }
    res.json(species[speciesIndex]);
});

router.delete("/:id", (req,res) => {
    const speciesIndex = species.findIndex(s=> s.id == req.params.id)
    if (speciesIndex === -1) {
        return res.status(404).json({
            error: "Not found"
        })
    }
        species.splice(speciesIndex, 1)
        res.json({ message: "Species deleted successfully"})
})



export default router;
