const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    const jwtkey = process.env.JWTSECKEY;
    return jwt.sign({_id}, jwtkey, {expiresIn: "3d" });
}

const userRegister = async (req, res) => {
    try {
        
        const {firstname, lastname, email, password, confirmpassword, address, address2, city, province, postalcode} = req.body;

        console.log(req.body);


        let user = await userModel.findOne({email});
    
        if(user) return res.status(400).json("User with the given email already exist.");
    
        // if(!name || !email || !password) return res.status(400).json({message: "All fields required."});
    
        if(!firstname || !lastname || !email || !password || !confirmpassword || !address || !city || !province || !postalcode) return res.status(400).json({message: "All fields required."});

        if(!validator.isEmail(email))
            return res.status(400).json("Please enter valid email.");
    
        if(!validator.isStrongPassword(password))
            return res.status(400).json("Please enter strong password.");
    
        user = new userModel({firstname, lastname, email, password, address, address2, city, province, postalcode});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    
        await user.save();
    
        const token = createToken(user._id);
    
        res.status(200).json({_id:user._id, firstname, lastname, email, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const userLogin = async (req, res) => {
    try {
        
        const {email, password} = req.body;

        
        if(!email || !password) return res.status(400).json("All fields required.");
        
        if(!validator.isEmail(email))
            return res.status(400).json("Please enter valid email.");

        let user = await userModel.findOne({email});
        if(!user) return res.status(400).json("Invalid Email or Password.");
    
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) return res.status(400).json("Invalid Email or Password.");
    
        const token = createToken(user._id);
        res.status(200).json({_id:user._id, firstname: user.firstname, email, token});

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const findUser = async (req, res) => {
    const userId = req.params.userId
    try {
        let userInfo = await userModel.findById(userId)
        res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getUsers = async (req, res) => {
    try {
        let userInfo = await userModel.find({ email: { $ne: "Admin@gmail.com" } }).sort( { firstname: 1 } );
        res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



module.exports = {userRegister, userLogin, findUser, getUsers};