const category = require('../models/category');
const categoryController = {
    getAll: (req,res)=>{
        category.getAll((err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },

    create: (req,res)=>{
        category.create(req.body,(err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },

    update: (req,res)=>{
        category.update(req.params.id,req.body,(err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    },

    delete:(req,res)=>{
        category.delete(req.params.id,(err,data)=>{
            if (err) {
                res.json(err)
            } else {
                res.json(data)
            }
        })
    }
}
module.exports = categoryController;