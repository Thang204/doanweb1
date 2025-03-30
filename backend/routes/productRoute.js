const express = require("express");
const {
  listProducts,
  addProduct,
  removeProducts,
  singleProduct,
} = require("../controllers/productController");
const upload = require("../middleware/multer");

const productRouter = express.Router();

productRouter.post("/add", upload.fields([
    {name: "image1", maxCount: 1}, 
    {name: "image2", maxCount: 1}, 
    {name: "image3", maxCount: 1}, 
    {name: "image4", maxCount: 1}]), 
    addProduct);
productRouter.post("/remove", removeProducts);
productRouter.post("/single", singleProduct);
productRouter.post("/list", listProducts);

module.exports = productRouter;
