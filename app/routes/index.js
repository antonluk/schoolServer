const express = require('express')
const router = express.Router();
const gameController = require('../controller/gameController')

router.route('/api/game')
    .get((req, res) => {
        gameController.gamesResult(req, res);
    })
    .post((req, res) => {
        gameController.finishGame(req, res);
    })
module.exports = router;
