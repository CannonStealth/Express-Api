import * as express from "express";
import { port as PORT } from "./keys.json";
const app = express();

app.listen(PORT, () => console.log("Server is listening at port " + PORT));

export default app;