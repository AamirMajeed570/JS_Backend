import User from "../models/user.model.js";

export const registerCtrl = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(300).send("All Fields are required");
    }
    const createuser = await User.create({
        name,email,password
    });
    if(!createuser){
        res.status(300).send("Some Error Ocurred While registering User");
    }
    await createuser.save();
    res.status(200).send({
        message:"Success",
        data:createuser
    })
}
 