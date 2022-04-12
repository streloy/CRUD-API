const router = require("express").Router();
const { 
    controllerUserCreate,
    controllerUserRead,
    controllerUserUpdate,
    controllerUserDelete,
    controllerUserList
} = require("./users.controller");

router.post("/create", controllerUserCreate);
router.get("/read", controllerUserRead);
router.put("/update", controllerUserUpdate);
router.delete("/delete", controllerUserDelete);
router.get("/list", controllerUserList);




module.exports = router;
