const User = require("../models/schema");

const bcrypt = require("bcryptjs");
const env = require("dotenv");
const { createSecretToken } = require("../util/generateToken");

env.config();

const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).json({ message: "Deve indicar user e password" });
        }

        const user = await User.findOne({ email });

        if (!(user && (await bcrypt.compare(password, user.password)))) {
            return res.status(404).json({ message: "Credências inválidos" });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            //domain: process.env.MONGODB_URL, // Set your domain here
            path: "/", // Cookie is accessible from all paths
            expires: new Date(Date.now() + 86400000), // Cookie expires in 1 day
            secure: true, // Cookie will only be sent over HTTPS
            httpOnly: true, // Cookie cannot be accessed via client-side scripts
            sameSite: "None",
        });

        res.json({ token });
    } catch(err) {
        console.log("Erro: ", err)
    }
};
module.exports = login;