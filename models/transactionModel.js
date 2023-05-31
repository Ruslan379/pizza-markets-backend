const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSchemaValidationErrors } = require("../helpers");


//-----------------------------------------------------------------------------
const transactionsType = ["income", "expenses"];

const transactionsCategory = [
    "Transport",
    "Products",
    "Health",
    "Alcohol",
    "Entertainment",
    "Housing",
    "Technique",
    "Communal, communication",
    "Sports, hobbies",
    "Education",
    "Other",
    "Salary",
    "Add.Income"
];


const transactionsSchema = Schema({
    transactionsType: {
        type: String,
        required: [true, 'Set transactions type'],
        enum: transactionsType,
    },
    date: {
        type: String,
        required: [true, 'Set transactions date'],
    },
    sortDate: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        required: [true, 'Set transactions category'],
        enum: transactionsCategory,
    },
    sum: {
        type: Number,
        required: [true, "Set transactions sum"],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, { versionKey: false, timestamps: true });


//! Правильный код ошибки transactionsSchema
transactionsSchema.post("save", handleSchemaValidationErrors)


//* ++++++++++++++++++++++ Схемы ВАЛИДАЦИИ Joi +++++++++++++++++++++++++
const transactionJoiSchemaPost = Joi.object({
    transactionsType: Joi.string()
        .valid(...transactionsType)
        .required(),
    date: Joi.string()
        .required(),
    sortDate: Joi.number()
        .required(),
    category: Joi.string()
        .required(),
    sum: Joi.number()
        .required(),
    description: Joi.string()
        .required(),
});

//--------------------------------------------------------------------
const transactionJoiSchemaPatch = Joi.object({
    name: Joi.string()
        // .alphanum()
        .min(3)
        .max(30)
        .optional(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua', 'org',] } })
        .optional(),

    phone: Joi.string()
        // .alphanum()
        .min(5)
        .max(14)
        .optional(),

    favorite: Joi.bool()
        .optional(),
});

//* _______________________ Схемы ВАЛИДАЦИИ Joi _______________________


//? Создаем МОДЕЛЬ:
const Transaction = model("transaction", transactionsSchema); //! DB_HOST



module.exports = {
    Transaction,
    transactionJoiSchemaPost,
    transactionJoiSchemaPatch,
};

