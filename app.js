import express from "express";
import routerCheckList from "./src/routes/checklist.js"

const app = express();
app.use(express.json());

app.use(routerCheckList);

app.listen(3030, () => {
    console.log("Servidor iniciado")
})