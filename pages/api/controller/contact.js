const catchAsyncError = require("../middleware/catchAsyncError");
const contact = require("../model/contact");
const ErrorHandler = require("../utils/ErrorHandler");

const createContact = catchAsyncError(async (req, res, next) => {
  try {
    const { Fullname, Email, Select, Contact, Message } = req.body;

    const data = await contact.create({
      Fullname,
      Email,
      Select,
      Contact,
      Message,
    });
    return res
      .status(200)
      .json({ success: true, data: data, message: "Thank you" });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = { createContact };
