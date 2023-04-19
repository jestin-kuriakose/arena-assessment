import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import listingRoute from "./routes/listings.js"
import userRoute from "./routes/users.js"
import headerRoute from "./routes/headers.js"
import heroRoute from "./routes/hero.js"


const app = express()

const PORT = 3001;

app.use(express.json());
app.use(cors())

app.use("/api/v1/header", headerRoute)
app.use("/api/v1/hero", heroRoute)
app.use("/api/v1/listing", listingRoute)
app.use("/api/v1/user", userRoute)

  

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))