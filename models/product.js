const conn = require("../config/database");
const product = {
    getAll: (callback)=>{
        var sql = "SELECT * FROM product";
        conn.query(sql,(err,data)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,data)
            }
        })
    },

    create :(data,callback)=>{
        var sql = "INSERT INTO product SET ?";
        conn.query(sql,data,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    getById: (id,callback)=>{
        var sql = "SELECT * FROM product WHERE id = ?";
        conn.query(sql, id, (err,result) =>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    update: (id, data, callback) =>{
        var sql = "UPDATE product SET ? WHERE id = ? ";
        conn.query(sql,[data,id],(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    },

    delete:(id,callback)=>{
        var sql = "DELETE FROM product WHERE id =?";
        conn.query(sql,id,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    }

}
module.exports = product;