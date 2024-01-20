const router= require("express").Router()
const userController= require("./../controllers/userControllers")


router.get("/api",userController.getAllData)
router.get("/api/:id",userController.getUserById)
router.delete("/api/:id",userController.deleteData)
router.post("/api",userController.postData)

module.exports=router