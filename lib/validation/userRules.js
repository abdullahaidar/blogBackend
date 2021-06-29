const { body } = require('express-validator')


exports.userValidationRules = [

    body('email').isEmail(),
    body('password').trim().isLength({ min: 8 }).withMessage('Password should be 8 char at least'),
    body('firstName').notEmpty().withMessage('First Name should not be empty'),
    body('lastName').notEmpty().withMessage('Last Name should not be empty'),
];


