// imports
// ↓
// app setup (express.json, static files)
// ↓
// custom middleware (logreq, addTimeStamp)
// ↓
// routes 
// ↓
// error handler (always last)
// ↓
// app.listen

import express from "express"
import { logreq, addTimeStamp } from "./middleware/index.js";
import  speciesRouter from "./routes/species.js"; // can pick any name for variable when using default router


const port = 3000;
const app = express();


app.use(express.json()) //parsing middleware
app.use(logreq);
app.use(addTimeStamp);
app.use("/api/species", speciesRouter)





app.use((err,req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({error: err.message})
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
