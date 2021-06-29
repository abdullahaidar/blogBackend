const { body } = require('express-validator');

exports.postValidationRules = [

    body('title').notEmpty().withMessage('Please add a title'),
    body('content').notEmpty().withMessage('please add a content'),
];


