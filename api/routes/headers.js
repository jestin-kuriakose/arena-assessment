import express from "express"
import Header from "../models/Header.js"
import { getSignedUrlFromS3 } from "../storage.js"
import bodyParser from "body-parser"
import multer from "multer"
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

// Get all headers
router.get('/', (req, res) => {
    Header.findAll()
    .then((header) => {
        res.status(200).json(header)
    })
    .catch((err) => {
        console.log("Error retrieving headers", err)
        res.status(500).json({error: "Error retrieving header"})
    })
})

// Create a new header
router.post('/', async(req, res) => {
    Header.create(req.body)
    .then((header) => {
        console.log(header)
        res.status(200).json(header)
    })
    .catch((err) => {
        console.log("Error creating new Listing", err)
        res.status(500).json({error: "Error creating new Listing"})
    })
})

// Edit a Listing
router.patch('/', async(req, res) => {
    // const data = JSON.parse(req.body.data);
    // console.log(data)
    //const url = await getSignedUrlFromS3(req)
    try {
        const response = await Header.update(req.body,{
            where: {
                id: 1
            }
        })
        console.log(response)
        res.status(200).json({message: "No of updated rows: " + response})
        
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error updating header details"})
    }
    

})

export default router