const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.use(cors());
/*
This route should return all the theaters and, the movies playing at each theatre added to the movies key.
This means you will need to check the movies_theaters table.
 */

router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
