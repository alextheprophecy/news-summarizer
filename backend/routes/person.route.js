let express = require("express"),
    router = express.Router();

const {getPerson} = require("../controllers/personHandler")

router.post("/image", (req, res, next) => {
    const {name} = req.body
    getPerson(name).then((image) => res.send(image)).catch(next)
});

module.exports = router;