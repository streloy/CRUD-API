const conn = require("../../config/db_connection");

function userCreate(data, callback) {
    conn.query("INSERT INTO users (fullname, email, password) values(?, ?, ?)", [
        data.fullname,
        data.email,
        data.password
    ], (error, result, fields)=> {
        if(error) {
            return callback(error);
        } else {
            data.row_id = result.insertId;
            userRead(data, callback);
        }
    });
}

function userRead(data, callback) {
    conn.query("SELECT * FROM users WHERE id=?", [
        data.row_id
    ], (error, result, fields)=> {
        if(error) {
            return callback(error);
        } else {
            if(result.length > 0) {
                return callback(null, result[0]);
            } else {
                return callback(null, result);
            }
        }
    });
}

function userUpdate(data, callback) {
    conn.query("UPDATE users SET fullname=?, email=?, password=? WHERE id=?", [
        data.fullname,
        data.email,
        data.password,
        data.row_id
    ], (error, result, fields)=> {
        if(error) {
            return callback(error);
        } else {
            console.log(result);
            userRead(data, callback);
        }
    });
}

function userDelete(data, callback) {
    conn.query("DELETE FROM users WHERE id=?", [
        data.row_id
    ], (error, result, fields)=> {
        if(error) {
            return callback(error);
        } else {
            console.log(result);
            return callback(null, result);
        }
    });
}

function userList(data, callback) {
    conn.query("SELECT * FROM users", [
        data.row_id
    ], (error, result, fields)=> {
        if(error) {
            return callback(error);
        } else {
            return callback(null, result);
        }
    });
}

module.exports = {
    "serviceUserCreate": userCreate,
    "serviceUserRead": userRead,
    "serviceUserUpdate": userUpdate,
    "serviceUserDelete": userDelete,
    "serviceUserList": userList,
}