const categoryController = require('../controllers/categoryController');
const productController = require('../controllers/productController');
const uploadFile = require('../config/file');
const api_route = (app)=>{
    app.get("/api/category",categoryController.getAll);
    app.post("/api/category",categoryController.create);
    app.put("/api/category/:id",categoryController.update);
    app.delete("/api/category/:id",categoryController.delete);

    app.get("/api/product",productController.getAll);
    app.post("/api/product",uploadFile.single('image'),productController.create);
    app.put("/api/product/:id",uploadFile.single('image'),productController.update);
    app.delete("/api/product/:id",productController.delete);
}
module.exports = api_route;