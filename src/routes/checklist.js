import express from "express";

const routerCheckList = express.Router();

routerCheckList.get("/checklists", (req, res) => {
    console.log("checklist funcionadno");
    res.send();
});

routerCheckList.post("/checklists", (req, res) => {
    console.log(req.body);
    res.status(201).send(req.body);
});

export default routerCheckList;