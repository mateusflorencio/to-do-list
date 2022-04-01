import express from "express";

const routerCheckList = express.Router();

routerCheckList.get("/", (req, res) => {
    console.log("checklist funcionadno");
    res.send();
});

routerCheckList.get("/:id", (req, res) => {
    console.log(req.params.id);
});

routerCheckList.post("/", (req, res) => {
    console.log(req.body);
    res.status(201).send(req.body);
});

routerCheckList.put("/:id", (req, res) => {
    console.log(req.params.id);
    res.status(200).send(req.params.id)
});

routerCheckList.delete("/:id", (req, res) => {
    console.log(req.params.id);
    res.send().status(200);
});

export default routerCheckList;