const { Schema, model } = require("mongoose");
const Joi = require("joi");

// const { handleSchemaValidationErrors } = require("../helpers"); //?


//-----------------------------------------------------------------------------
// const shopType = ["income", "expenses"];

// const pizzasType = [
//     "Transport",
//     "Products",
//     "Health",
//     "Alcohol",
//     "Entertainment",
//     "Housing",
//     "Technique",
//     "Communal, communication",
//     "Sports, hobbies",
//     "Education",
//     "Other",
//     "Salary",
//     "Add.Income"
// ];


const marketSchema = Schema({
    shop: {
        type: String,
        required: [true, 'Set shop type'],
        // enum: shopType,
    },
    pizzas: {
        type: Array,
        required: [true, 'Set pizzas type'],
    },
    // sortDate: {
    //     type: Number,
    //     default: 0
    // },
    // description: {
    //     type: String,
    //     default: "",
    // },
    // category: {
    //     type: String,
    //     required: [true, 'Set transactions category'],
    //     // enum: pizzasType,
    // },
    // sum: {
    //     type: Number,
    //     required: [true, "Set transactions sum"],
    // },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true,
    // },
}, { versionKey: false, timestamps: true });


//! Правильный код ошибки transactionsSchema
// transactionsSchema.post("save", handleSchemaValidationErrors) //?


//* ++++++++++++++++++++++ Схемы ВАЛИДАЦИИ Joi +++++++++++++++++++++++++
// const transactionJoiSchemaPost = Joi.object({
//     transactionsType: Joi.string()
//         .valid(...transactionsType)
//         .required(),
//     date: Joi.string()
//         .required(),
//     sortDate: Joi.number()
//         .required(),
//     category: Joi.string()
//         .required(),
//     sum: Joi.number()
//         .required(),
//     description: Joi.string()
//         .required(),
// });

//--------------------------------------------------------------------
// const transactionJoiSchemaPatch = Joi.object({
//     name: Joi.string()
//         // .alphanum()
//         .min(3)
//         .max(30)
//         .optional(),

//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
//         .optional(),

//     phone: Joi.string()
//         // .alphanum()
//         .min(5)
//         .max(14)
//         .optional(),

//     favorite: Joi.bool()
//         .optional(),
// });

//* _______________________ Схемы ВАЛИДАЦИИ Joi _______________________


//? Создаем МОДЕЛЬ:
const Market = model("market", marketSchema); //! DB_HOST



module.exports = {
    Market,
    // transactionJoiSchemaPost,
    // transactionJoiSchemaPatch,
};

