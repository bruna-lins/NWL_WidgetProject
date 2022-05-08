import express from "express";
import { routes } from "./routes";

const app = express();

//middleware
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});