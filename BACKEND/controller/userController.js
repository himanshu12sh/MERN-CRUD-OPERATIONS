import User from "../model/userModel.js"

export const create=async(req,res)=>{
    try{
      const userData=new User(req.body)
      if(!userData){
        return res.status(405).json({message:"UserData Not Found"});
      }

      const saveData=await userData.save();
      res.status(201).json({message:"User Created Successfully",data:saveData})
    }
    catch(err){
        return res.status(405).json({message:"Invalid Request"});

    }
}

export const getAll=async(req,res)=>{
    try{
      const userData=await User.find()
      if(!userData){
        return res.status(405).json({message:"UserData Not Found"});
      }

      res.status(201).json({message:"User Fetched Succesfully",userData})
    }
    catch(err){
        return res.status(405).json({message:"Invalid Request"});

    }
}


export const getOne=async(req,res)=>{
    try{
      const id=req.params.id;
      const userExist=await User.findById(id)
      if(!userExist){
        return res.status(405).json({message:"User Not Found"});
      }
     return res.status(201).json({message:"User Fetched Succesfully",userExist})
    }
    catch(err){
      return res.status(405).json({message:"Invalid Request"})
    }
}


export const update = async (req, res) => {
    try {
      const id = req.params.id;
      
      const updateData = await User.findByIdAndUpdate(id, req.body, { new: true });
      
      if (!updateData) {
        return res.status(404).json({ message: "User Not Found" });
      }
  
      return res.status(200).json({  message: "User Updated Successfully",data: updateData});
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };


  export const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await User.findByIdAndDelete(id)
        if(!userExist){
            return res.status(404).json({message:"User does not Found"})
        }
        return res.status(201).json({message:"User  Deleted Succesfully",userExist})



    }catch(err){
        return res.status(500).json({ error: err.message });
    }
  }
  