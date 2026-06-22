import express from "express";
import {enclosures} from "../data/database.js";

const router = express.Router();



//create a GET route to return enclosures

router.get("/",(req, res) =>{
    const speciesId = req.query.speciesId;
    if (speciesId) {
        const enclFilter = enclosures.filter(e => e.speciesId === speciesId);
        res.json(enclFilter);
    } else {
        res.json(enclosures)
    }
    
});


router.get("/:id", (req,res) => {
    const enclosureId = enclosures.find(enclosures => enclosures.id == req.params.id)

    if (!enclosureId) {
       return res.status(404).json({
error: "Enclosure info not found"
       })
        
    
    }
    res.json(enclosureId)
});

router.post("/", (req,res) =>{
    const newEnclosure = {id: Date.now(), ...req.body}; 
        enclosures.push(newEnclosure);

        res.status(201).json(newEnclosure);
});

router.patch("/:id",(req,res) => {
    const enclIndex = enclosures.findIndex(e => e.id == req.params.id)
    if (enclIndex === -1) {
        return res.status(404).json({
            error: "Couldnt find a match"
        })
    }
    enclosures[enclIndex] = { ...enclosures[enclIndex], ...req.body }
    res.json(enclosures[enclIndex]);
});

router.delete("/:id", (req,res) => {
    const enclIndex = enclosures.findIndex(e=> e.id == req.params.id)
    if (enclIndex === -1) {
        return res.status(404).json({
            error: "Not found"
        })
    }
        enclosures.splice(enclIndex, 1)
        res.json({ message: "Enclosure deleted successfully"})
})



export default router;