//HOME LOGIC 

const home = async(req, res)  =>
    {
        try {
            res
            .send('MERN THAPA TECH using router')
        }  
        catch (error ){
         console.log(error);
        }
    };


    // REGISTRATION PAGE 

    const register = async(req, res) => {
        try{
            console.log(req.body);
            res
            .status(200)
           // .send('Welcome to Registration Page using Controllers')
           .json({message : req.body})
        }
        catch (error){
           res.status(400).send({msg:"page not found"})
        }
    };

    module.exports = {home,register};
