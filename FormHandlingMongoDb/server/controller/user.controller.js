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
 
export const getAllUsersCtrl = async (req,res) =>{
    try {
        const allUsers = await User.find();
        if(!allUsers){
            return res.status(300).send({
                message: "No Users Found",
            })
        }

        return res.status(200).send({
            message: "Success",
            data: allUsers,
        })
    } catch (error) {
        res.status(300).send({
            message: "Something went wrong",
            error: error.message,
        })
    }
}

export const deleteUserCtrl = async (req,res) =>{
    try {
        const {id} = req.params;
        const findUser = await User.findByIdandDelete(id);
        if(!findUser){
            return res.status(300).send({
                message: "User Not Found",
            })
        }

        return res.status(200).send({
            message: "Success",
            data: findUser,
        })

    } catch (error) {
        return res.status(404).send({message: "Not Found"})
    }
}

export const updateUserCtrl = async (req,res) =>{
    try {
        const {id} = req.params;
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(300).send({
                message: "All Fields are required",
            })
        }

        const findUser = await User.findByIdAndUpdate(id,{
            name: name,
            email: email,
            password: password,
        });

        return res.status(200).send({
            message: "Success",
            data: findUser,
        })
    } catch (error) {
        return res.status(404).send({message: "Not Found"})
    }
}




// CRUD
// C- Create
// R- Read
// U-Update
// D- Delete