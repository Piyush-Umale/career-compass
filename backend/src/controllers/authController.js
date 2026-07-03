const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res)=>{
    try {
        const {name, password} = req.body;
        if(!name || !password){
            return res.status(400).json({message : "please provide name and password"})
        }

        const user = await User.findOne({name});

        if(!user){
           return res.status(401).json({message : "Invalid name or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({message : "Invalid name or password"});
        }

        ///////// generate jwt token ///////
        const token = jwt.sign(
            {
                userId: user._id,

            },
            process.env.JWT_SECRET,
            {expiresIn : "1d"}
        )

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
            }
        });

    } catch (error) {
        console.log("Login error", error);
        res.status(500).json({message: "Server error"});
    }
}

const registerUser = async (req, res)=>{
    try {
        const{ name, password} = req.body;

        if(!name || !password){
            return res.status(400).json({message : "Please provide all required fields"});
        }

        const existingUser = await User.findOne({name}); ////// checking if user already exists

        if(existingUser){
            return res.status(409).json({message: "User already exists with this name"});
        }

        const salt = await bcrypt.genSalt(10); ////////// adds random generated string of characters to password 
        
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({name,  password: hashedPassword,});

        res.status(201).json({
            message : "User registered successfully",
            user:{
                id : user._id,
                name : user.name,
            }
        });

    } catch (error) {
        console.log("Register Error:" , error);
        res.status(500).json({message : "Server error"});
    }
};

module.exports = { registerUser, loginUser };