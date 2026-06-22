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


const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

app.use((err,req, res, next) => {
    console.log(err.message)
    res.status(500).send("ERROR!")
});