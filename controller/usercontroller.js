const usermodel = require('../model/usermodel');

exports.insert= async (req,res)=>{
    let data = await usermodel.create(req.body);
    res.status(200).json({
        status:"succefuuly insert",
        massage:data
    })

}

exports.select=async (req,res)=>{
    let data = await usermodel.find();
    res.status(200).json({
        status:"suceeful select",
        massage:data
    })
    
}

exports.delete =async (req,res)=>{

    let data = await usermodel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status:"succefully delete",
        massage:data
    })

}

exports.update = async (req,res)=>{
    let id= req.params.id;
    let data = await usermodel.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"succefully update",
        massage:data
    })
}