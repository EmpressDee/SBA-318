// node server.js  then localhost:3000/api/species
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
import enclosureRouter from "./routes/enclosures.js";
import careRouter from "./routes/care-tips.js"
import { species } from "./data/database.js";


const port = 3000;
const app = express();


app.set("view engine", "ejs");  // tells Express to use EJS
app.set("views", "./views");    


app.use(express.json()) //parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(logreq);
app.use(addTimeStamp);


app.use("/api/species", speciesRouter);
app.use("/api/enclosures", enclosureRouter);
app.use("/api/care-tips", careRouter);




app.get("/", (req, res) => {
    res.render("index", { species: species });
});






app.use((err,req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({error: err.message})
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
