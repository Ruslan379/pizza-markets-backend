const express = require('express')
const router = express.Router()

const { validation, controllerWrapper, isValidId, authMiddleware } = require("../../middlewares")

const { transactionsControllers: ctrl } = require("../../controllers")

const {
    transactionJoiSchemaPost,
    transactionJoiSchemaPatch
} = require("../../models/transactionModel.js");

const validateMiddlewarePost = validation(transactionJoiSchemaPost);
const validateMiddlewarePatch = validation(transactionJoiSchemaPatch);


//-----------------------------------------------------------------------------
//! 0. Проверка токена
// router.use(authMiddleware);

//* 1. Получение ВСЕХ ТРАНЗАКЦИЙ ПОЛЬЗОВАТЕЛЯ 
router.get("/", authMiddleware, controllerWrapper(ctrl.getAllTransactions));



// //! 2. Получение ОДНОГО КОНТАКТА по id
// // router.get('/:contactId', isValidId, controllerWrapper(ctrl.getContactById));
// router.get('/:contactId', authMiddleware, isValidId, controllerWrapper(ctrl.getContactById))


//* 3. Создание НОВОЙ ТРАНЗАКЦИИ Expenses или INCOME
router.post("/", authMiddleware, validateMiddlewarePost, controllerWrapper(ctrl.addTransaction));


// //! 4-1. PUT-Обновление ОДНОГО КОНТАКТА по id
// // router.put('/:contactId', controllerWrapper(ctrl.updatePutContact));
// // router.put('/:contactId', isValidId, validateMiddlewarePut, controllerWrapper(ctrl.updatePutContact));
// router.put('/:contactId', authMiddleware, isValidId, validateMiddlewarePost, controllerWrapper(ctrl.updatePutContact));



// //! 4-2. PATCH-Обновление ОДНОГО КОНТАКТА по id
// // router.patch("/:contactId", isValidId, validateMiddlewarePatch, controllerWrapper(ctrl.updatePatchContact));
// router.patch("/:contactId", authMiddleware, isValidId, validateMiddlewarePatch, controllerWrapper(ctrl.updatePatchContact));


// //! 4-3. PATCH-Обновление поле статуса favorite по id
// // router.patch("/:contactId/favorite", controllerWrapper(ctrl.updatePatchContactFavorite));
// // router.patch("/:contactId/favorite", isValidId, validateMiddlewarePatchFavorite, controllerWrapper(ctrl.updatePatchContactFavorite));
// router.patch("/:contactId/favorite", authMiddleware, isValidId, validateMiddlewarePatchFavorite, controllerWrapper(ctrl.updatePatchContactFavorite));


//* 5. Удаление ОДНОЙ ТРАНЗАКЦИИ Expenses или INCOME по id
router.delete('/:transactionId', authMiddleware, isValidId, controllerWrapper(ctrl.removeTransaction));



// //! 6. Удаление ВСЕХ КОНТАКТОВ
// // router.delete("/", controllerWrapper(ctrl.removeAllContacts));
// router.delete("/", authMiddleware, controllerWrapper(ctrl.removeAllContacts));


module.exports = router
