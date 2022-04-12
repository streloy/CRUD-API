const { 
    serviceUserCreate,
    serviceUserRead,
    serviceUserUpdate,
    serviceUserDelete ,
    serviceUserList,
} = require("./users.service");

function userCreate(req, res) {
    serviceUserCreate(req.body, (error, result)=> {
        if(error) {
            return failedMessage(res, error);
        }
        return successMessage(res, result);
    })
}

function userRead(req, res) {
    req.body.row_id = req.query.row_id;
    serviceUserRead(req.body, (error, result)=> {
        if(error) {
            return failedMessage(res, error);
        }
        return successMessage(res, result);
    })
}

function userUpdate(req, res) {
    serviceUserUpdate(req.body, (error, result)=> {
        if(error) {
            return failedMessage(res, error);
        }
        return successMessage(res, result);
    })
}

function userDelete(req, res) {
    req.body.row_id = req.query.row_id;
    serviceUserDelete(req.body, (error, result)=> {
        if(error) {
            return failedMessage(res, error);
        }
        return successMessage(res, result);
    })
}

function userList(req, res) {
    serviceUserList(req.body, (error, result)=> {
        if(error) {
            return failedMessage(res, error);
        }
        return successMessage(res, result);
    })
}

function failedMessage(res, error) {
    res.status(500).json({
        status: 0,
        message: error
    })
}

function successMessage(res, data) {
    res.status(200).json({
        status: 1,
        message: "API request success",
        data: data
    })
}


module.exports = {
    "controllerUserCreate": userCreate,
    "controllerUserRead": userRead,
    "controllerUserUpdate": userUpdate,
    "controllerUserDelete": userDelete,
    "controllerUserList": userList,
}