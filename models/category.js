const conn = require('../config/database');
const category = {
    getAll:(callback)=>{
        var sql = "SELECT * FROM category";
        conn.query(sql,(err,data)=>{
            if (err) {
                callback(err, null)
            }else{
                callback(null,data)
            }
        })
    },
    
    create:(data,callback)=>{
        var sql = "INSERT INTO category SET ?";
        conn.query(sql,[data],(err,result)=>{
            if (err) {
                callback(err,null)
            }else{
                callback(null,result)
            }
        })
    },

    update:(id,data,callback)=>{
        var sql = "UPDATE category SET ? WHERE id = ?";
        conn.query(sql,[data,id],(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
       
    },

    delete:(id,callback)=>{
        var sql = "DELETE FROM category WHERE id = ?";
        conn.query(sql,id,(err,result)=>{
            if (err) {
                callback(err,null)
            } else {
                callback(null,result)
            }
        })
    }
}
module.exports= category;