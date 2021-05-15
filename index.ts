import load from "./services/load-services";
import { mongoPath } from "./keys.json";
import mongo from "./services/mongo-services";

(async() => {
    
await mongo(mongoPath)
await load("endpoints")
})()

// LOAD FUNCTION LOADS EVERY FILES IN A SPECIFIC FOLDER
/* WORKS IN THIS WAY:

file.ts:

export default {
    ignored: boolean decides if it will ignore,
    run: (app) => {
        code here
        app IS THE APP
    }
}
*/