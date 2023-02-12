const product = require('../models/product');
const productController = {
    getAll: (req,res)=>{
        product.getAll((err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },

    create: (req,res)=>{
        req.body.image = req.get('host') + "/" + req.file.filename;
        product.create(req.body,(err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },

    update: (req,res)=>{
        product.getById(req.params.id,(err,result)=>{
            if (err) {
                res.json(err)
            } else {
                if (!req.file) {
                    req.body.image = result[0].image;
                } else {
                    req.body.image = req.get('host') + "/" + req.file.filename;
                }
                product.update(req.params.id,req.body,(err,result)=>{
                    if (err) {
                        res.json(err)
                    } else {
                        res.json(result)
                    }
                })
            }
        })
    },

    delete:(req,res)=>{
        product.delete(req.params.id,(err,result)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    }
}
module.exports = productController;