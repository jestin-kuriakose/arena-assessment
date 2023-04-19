import express from "express"
import Hero from "../models/Hero.js"
const router = express.Router()

// Get all hero info
router.get('/', (req, res) => {
    Hero.findAll()
    .then((hero) => {
        res.status(200).json(hero)
    })
    .catch((err) => {
        console.log("Error retrieving headers", err)
        res.status(500).json({error: "Error retrieving header"})
    })
})

// Create a new Hero
router.post('/', (req, res) => {
    Hero.create(req.body)
    .then((hero) => {
        console.log(hero)
        res.status(200).json(hero)
    })
    .catch((err) => {
        console.log("Error creating new Hero", err)
        res.status(500).json({error: "Error creating new Hero"})
    })
})

// Edit a Hero
router.patch('/', async(req, res) => {
    try {
        const response = await Hero.update(req.body,{
            where: {
                id: 1
            }
        })
        console.log(response)
        res.status(200).json({message: "No of updated rows: " + response})
        
    } catch(err) {
        console.log(err)
        res.status(500).json({error: "Error updating Hero details"})
    }
    

})

export default router