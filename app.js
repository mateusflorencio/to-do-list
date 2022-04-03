import express from "express";
import {
    dirname
} from 'path';
import {
    fileURLToPath
} from 'url';

import routerCheckList from "./src/routes/checklist.js"
import routerIndex from "./src/routes/index.js";
import "./config/database.js";


const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', (fileURLToPath(new URL("./src/views",
    import.meta.url))));


app.use("/checklists", routerCheckList);
app.use("/", routerIndex);

app.listen(3030, () => {
    console.log("Servidor iniciado")
})