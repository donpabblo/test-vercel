import express from "express";

var router = express.Router();

router.get('/test', function (req, res, next) {
    res.json({ result: "OK" });
});

export default router;
