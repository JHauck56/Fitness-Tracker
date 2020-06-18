const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
        type: {
            type: String,
        },
        name: {
            type: String,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,

        },
        sets: {
            type: Number,
        }
    }
    ] 
})
var Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;