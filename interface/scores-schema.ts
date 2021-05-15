import { model, Schema } from "mongoose"

const scores = new Schema({
    name: String,
    points: Number
})

export default model("score", scores)