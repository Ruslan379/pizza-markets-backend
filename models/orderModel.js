const { Schema, model } = require("mongoose");
const Joi = require("joi");


//-----------------------------------------------------------------------------
const emailRegexp = /^[\w.]+@[\w]+.[\w]+$/;

const orderSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        // default: "User",
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'Phone is required'],
    },
    total: {
        type: Number,
        default: 0,
    },
}, { versionKey: false, timestamps: true });




//* ++++++++++++++++++++++ Схемы ВАЛИДАЦИИ Joi +++++++++++++++++++++++++
const subscriptionList = ["starter", "pro", "business"];

const registerJoiSchema = Joi.object({
    name: Joi.string()
        .min(2),
    // .required(),
    email: Joi.string()
        .pattern(emailRegexp)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .required(),
    password: Joi.string()
        .min(3)
        .required(),
    subscription: Joi.string()
        .valueOf(...subscriptionList)
        .optional(),
});
//--------------------------------------------------------------------
const loginJoiSchema = Joi.object({
    email: Joi.string()
        .pattern(emailRegexp)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .required(),
    password: Joi.string()
        .min(3)
        .required(),
});
//--------------------------------------------------------------------
const changeSubscriptionJoiSchema = Joi.object({
    subscription: Joi.string()
        .valueOf(...subscriptionList)
        .required(),
});
//--------------------------------------------------------------------
const verifyEmailJoiSchema = Joi.object({
    email: Joi.string()
        .pattern(emailRegexp)
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .required(),
})
//* _______________________ Схемы ВАЛИДАЦИИ Joi _______________________


//? Создаем МОДЕЛЬ:
const Order = model("order", orderSchema); //! DB_HOST



module.exports = {
    Order,
    // registerJoiSchema,
    // loginJoiSchema,
    // changeSubscriptionJoiSchema,
    // verifyEmailJoiSchema,
};

