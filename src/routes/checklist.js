import express from "express";
import Checklist from "../model/checklist.js";

const routerCheckList = express.Router();

routerCheckList.get("/", (req, res) => {
    console.log("checklist funcionadno");
    res.send();
});

routerCheckList.get("/:id", (req, res) => {
    console.log(req.params.id);
});

routerCheckList.post("/", async (req, res) => {
    let {
        name
    } = req.body;
    console.log(req.body)
    try {
        let checkList = await Checklist.create({
            name
        });
        res.status(200).json(checkList);
    } catch (error) {
        res.status(422).json(error.name)
    };

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