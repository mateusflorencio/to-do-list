import express from "express";

const routerIndex = express.Router();

routerIndex.get("/", async (req, res) => {
    res.render("pages/index")
});

export default routerIndex;