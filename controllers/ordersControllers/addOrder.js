
const { Order } = require("../../models");

const { lineBreak } = require("../../services");


//-----------------------------------------------------------------------------
const addOrder = async (req, res, next) => {
    // const order = await Order.create(req.body);

    const { id: userId } = req.user //?
    //* =============================console===================================
    console.log("addOrder-->req.user:".bgYellow.red); //?
    // console.table(req.user); //?
    // console.table([req.user]);
    console.log(req.user);

    console.log("addOrder-->userId:".bgYellow.blue, userId.bgGreen.blue); //?
    console.log("");
    //* =======================================================================

    //! С добавлением _id Пользователя, который сделал заказ
    // const order = await Order.create({ ...req.body, owner: userId }); //?

    const order = await Order.create(req.body); //?


    //! ===========================console============================
    console.log("START-->POST".yellow); //!
    lineBreak();
    console.log(`НОВЫЙ ЗАКАЗ с ID: ${order.id}:`.bgYellow.blue); //!
    // console.table([order]); //!
    console.log(order); //!
    lineBreak();
    console.log("END-->POST".yellow); //!
    lineBreak();
    //! ==============================================================


    res.status(201).json({
        status: "success",
        code: 201,
        // data: { order }, //??
        order,
    });
};

module.exports = addOrder;