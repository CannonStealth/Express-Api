import { Router } from "express";
import scores from "../services/score-services";

export default {
    run: (app): void => {

        app.post("/scores/:name/:points", async (req, res) => {
            await scores.create(req.params.name, Number(req.params.points))
            res.status(201).send()
            logRequest(req.method)
        })

        app.get("/scores/all", async (req, res) => {
            const result = await scores.readAll()
            res.status(200).send(result)
            logRequest(req.method)
        })

        app.get("/userScores/:name", async (req, res) => { // userScores so if username is all it won't interfer
            const result = await scores.read(req.params.name)
            res.status(200).send(result)
            logRequest(req.method)
        })
    }
}

function logRequest(method): void {
    console.log(`Received a ${method} request`)
}