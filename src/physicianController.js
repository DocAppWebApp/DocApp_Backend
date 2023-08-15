var physicianService = require('./physicianService');

var savePhysicianInfoController = async(req, res) => {
    try{
        var status = await physicianService.savePhysicianInfoService(req.body);

        if(status){
            res.send({"status": true, message: "Physician Info saved Successfully."});
        }else{
            res.send({"status": false, message: "Error in saving Physician Info."});
        }
    }catch(error){
        console.log(error);
    }
}

var loginPhysicianInfoController = async(req, res) => {
    var result = null;
    try{
        result = await physicianService.physicianLoginService(req.body);

        if(result.status){
            res.send({"status": true, "message": result.message});
        }else{
            res.send({"status": false, "message": result.message});
        }
    }catch(error){
        console.log(error);
        res.send({"status":false, "message": error.message});
    }
}


var listPhysicianInfoController = async(req, res) => {
    var result = null;
    try{
        result = await physicianService.physicianListService(req.body);

        if(result.status){
            res.send({"status": true, "message": result.message});
        }else{
            res.send({"status": false, "message": result.message});
        }
    }catch(error){
        console.log(error);
        res.send({"status":false, "message": error.message});
    }
}

module.exports = { savePhysicianInfoController, loginPhysicianInfoController, listPhysicianInfoController }
