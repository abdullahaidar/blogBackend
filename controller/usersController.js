const User = require("../models/User");
const createError = require("http-errors");
const { validationResult }= require('express-validator')


/** SIGNING UP */
exports.addUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const user = new User(req.body);
        /** RETRIEVE A TOKEN FOR THE USER */
        const token = user.generateAuthToken();
        await user.save();
        /** SEND BACK THE TOKEN WITH PUBLIC FIELDS */
        const data = user.getPublicFields();
        res.status(200)
            .header("auth", token)
            .send(data);
    } catch (e) {
        next(e);
    }
};

/** SIGNING IN */
exports.loginUser = async (req, res, next) => {
    // GET EMAIL AND PASSWORD FROM THE REQUEST
    const email = req.body.email;
    const password = req.body.password;
    try {
        // FIND USER IN THE DATABASE
        const user = await User.findOne({ email });
        // CHECKING IF THE PASSWORD IS CORRECT
        const valid = await user.checkPassword(password);
        if (!valid) throw new createError.NotFound();
        // RETRIEVE A TOKEN
        const token = user.generateAuthToken();
        const data = user.getPublicFields();
        // RESPOND WITH TOKEN AND PUBLIC FIELDS
        res.status(200)
            .header("auth", token)
            .send(data);
    } catch (e) {
        next(e);
    }
}