import express from "express";
import Checklist from "../model/checklist.js";

const routerCheckList = express.Router();

routerCheckList.get("/", async (req, res) => {
    try {
        let checkLists = await Checklist.find({});
        res.json(checkLists);
    } catch (err) {
        res.json(err).status(500);
    }
});

routerCheckList.get("/:id", async (req, res) => {
    try {
        let checkList = await Checklist.findById(req.params.id);
        res.json(checkList);
    } catch (err) {
        res.json(err).status(422);
    }
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
        res.status(422).json(error.name);
    };

});

routerCheckList.put("/:id", async (req, res) => {
    let {
        name
    } = req.body;
    try {
        let checkList = await Checklist.findByIdAndUpdate(req.params.id, {
            name
        }, {
            new: true
        });
        res.status(200).json(checkList);
    } catch (error) {
        res.status(422).json(error.name);
    }
});

routerCheckList.delete("/:id", async (req, res) => {
    try {
        let checkList = await Checklist.findByIdAndDelete(req.params.id);
        res.status(200).json(checkList);
    } catch (error) {
        res.status(422).json(error);
    }
});

export default routerCheckList;