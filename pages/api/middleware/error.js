const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  // Wrong mongoDB ID Error
  if (err.name === "CastError") {
    const message = `resource not found . invalid:${err.path}`;
    err = new ErrorHandler(message, 400, res);
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate Email Entered`;
    err = new ErrorHandler(message, 400, res);
  }

  // wrong jwt error
  if (err.name === "jsonWebTokenError") {
    const message = `json web token is invalid please try again`;
    err = new ErrorHandler(message, 400, res);
  }

  // jwt expire error
  if (err.name === "TokenExpireError") {
    const message = `json web token is expire please try again`;
    err = new ErrorHandler(message, 400, res);
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
};
