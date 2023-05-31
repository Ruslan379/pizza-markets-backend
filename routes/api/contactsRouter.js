const express = require('express')
const router = express.Router()

// const { validation, controllerWrapper, isValidId, authMiddleware } = require("../../middlewares")

// const { contactsControllers: ctrl } = require("../../controllers")

const {
    // contactJoiSchemaPut,
    // contactJoiSchemaPatch,
    // contactJoiSchemaPatchFavorite
} = require("../../models/contactModel.js");

// const validateMiddlewarePut = validation(contactJoiSchemaPut);
// const validateMiddlewarePatch = validation(contactJoiSchemaPatch);
// const validateMiddlewarePatchFavorite = validation(contactJoiSchemaPatchFavorite);


//-----------------------------------------------------------------------------
//! 0. Проверка токена
// router.use(authMiddleware);

//! 1. Получение списка ВСЕХ КОНТАКТОВ
// router.get("/", authMiddleware, controllerWrapper(ctrl.getAllContacts));


//! 2. Получение ОДНОГО КОНТАКТА по id
// router.get('/:contactId', authMiddleware, isValidId, controllerWrapper(ctrl.getContactById))


//! 3. Создание НОВОГО ПОЛЬЗОВАТЕЛЯ
// router.post("/", authMiddleware, validateMiddlewarePut, controllerWrapper(ctrl.addContact));


//! 4-1. PUT-Обновление ОДНОГО КОНТАКТА по id
// router.put('/:contactId', authMiddleware, isValidId, validateMiddlewarePut, controllerWrapper(ctrl.updatePutContact));



//! 4-2. PATCH-Обновление ОДНОГО КОНТАКТА по id
// router.patch("/:contactId", authMiddleware, isValidId, validateMiddlewarePatch, controllerWrapper(ctrl.updatePatchContact));


//! 4-3. PATCH-Обновление поле статуса favorite по id
// router.patch("/:contactId/favorite", authMiddleware, isValidId, validateMiddlewarePatchFavorite, controllerWrapper(ctrl.updatePatchContactFavorite));


//! 5. Удаление ОДНОГО КОНТАКТА по id
// router.delete('/:contactId', authMiddleware, isValidId, controllerWrapper(ctrl.removeContact));


//! 6. Удаление ВСЕХ КОНТАКТОВ
// router.delete("/", authMiddleware, controllerWrapper(ctrl.removeAllContacts));


module.exports = router
