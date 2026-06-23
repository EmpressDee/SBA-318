import express from "express";
import {care_tips} from "../data/database.js";

const router = express.Router();



//create a GET route to return care tips

router.get("/",(req, res) =>{
    let result = care_tips; // replacing const with let so result can just be reassigned

    if (req.query.speciesId) {
          result = result.filter(t => t.speciesId == req.query.speciesId);
    }
    if (req.query.topic) {
        result = result.filter(t => t.topic === req.query.topic);
    }
        res.json(result);
    }
    
);


router.get("/:id", (req,res) => {
    const careId = care_tips.find(care_tips => care_tips.id == req.params.id)

    if (!careId) {
       return res.status(404).json({
error: "Care information not found"
       })
        
    
    }
    res.json(careId)
});

router.post("/", (req,res) =>{
    const newCare = {id: Date.now(), ...req.body}; 
        care_tips.push(newCare);

        res.status(201).json(newCare);
});

router.patch("/:id",(req,res) => {
    const careIndex = care_tips.findIndex(c => c.id == req.params.id)
    if (careIndex === -1) {
        return res.status(404).json({
            error: "Unable to find a match"
        })
    }
    care_tips[careIndex] = { ...care_tips[careIndex], ...req.body }
    res.json(care_tips[careIndex]);
});

router.delete("/:id", (req,res) => {
    const careIndex = care_tips.findIndex(c=> c.id == req.params.id)
    if (careIndex === -1) {
        return res.status(404).json({
            error: "Not found"
        })
    }
        care_tips.splice(careIndex, 1)
        res.json({ message: "Care tip deleted successfully"})
})



export default router;