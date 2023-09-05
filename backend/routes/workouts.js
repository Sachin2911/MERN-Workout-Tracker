const express = require("express")
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require("../controllers/workoutcontrollers")
const router = express.Router()

// GET all workouts
router.get('/',getWorkouts)
// GET single workout
router.get('/:id',getWorkout)
// POST a new workout
router.post('/', createWorkout)
// DELTE a workout
router.delete('/:id',deleteWorkout)
// UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router