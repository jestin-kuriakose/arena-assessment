import express from "express"
import Listing from "../models/Listing.js"
const router = express.Router()

// Get all Listings
router.get('/', (req, res) => {
    Listing.findAll()
    .then((listing) => {
        res.status(200).json(listing)
    })
    .catch((err) => {
        console.log("Error retrieving Listings", err)
        res.status(500).json({error: "Error retrieving Listings"})
    })
})

// Create a new Listing
router.post('/', (req, res) => {
    Listing.create(req.body)
    .then((listing) => {
        console.log(listing)
        res.status(200).json(listing)
    })
    .catch((err) => {
        console.log("Error creating new Listing", err)
        res.status(500).json({error: "Error creating new Listing"})
    })
})

// Edit a Listing
router.patch('/:id', async(req, res) => {
    console.log(req.body)
    try {
        const response = await Listing.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        console.log(response)
        res.status(200).json({message: "No of updated rows: " + response})
        
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error updating Listing details"})
    }
    

})

export default router