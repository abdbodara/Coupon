const catchAsyncError = require("../middleware/catchAsyncError");
const UserModel = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const sendToken = require("../utils/jwtToken");

const userLogin = catchAsyncError(async (req, res, next) => {
  try {
    const { clientId, fullName, email, image } = req.body;
    if (clientId && fullName && email && image) {
      const user = await UserModel.findOne({ clientId });
      if (user) {
        sendToken(user, 200, res);
        return;
      }
      const data = await UserModel.create({
        clientId: clientId ? clientId : "",
        fullName: fullName ? fullName : "",
        email: email ? email : "",
        image: image ? image : "",
      });
      sendToken(data, 201, res);
      return;
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getUserProfile = catchAsyncError(async (req, res, next) => {
  try {
    const id = req?.user?.id;
    const user = await UserModel.findOne({ _id: id }).populate(
      "favoriteCoupon favoriteOffer"
    );
    if (!user) {
      return next(new ErrorHandler("please login", 400, res));
    }
    return res.status(200).json({ data: user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const addStore = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.params.id;
    let { store } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) {
      return next(new ErrorHandler("User not found", 400, res));
    }
    if (!Array.isArray(store)) {
      store = [store];
    }
    const existingstore = store.filter((m) => user.store.includes(m));
    if (existingstore.length > 0) {
      return next(new ErrorHandler(`this store is already exist`, 400, res));
    }
    user.store.push(...store);
    user.save();
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const getStore = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;

    const data = await UserModel.aggregate([
      {
        $match: { _id: userId },
      },
      {
        $lookup: {
          from: "merchantmodels",
          localField: "store",
          foreignField: "_id",
          as: "stores",
        },
      },
    ]);

    if (data.length === 0) {
      return next(new ErrorHandler("store not found", 404, res));
    }
    return res.status(200).json({ success: true, data: data });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const FavoriteCoupon = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    let favoriteCoupon = req.params.id;

    if (!Array.isArray(favoriteCoupon)) {
      favoriteCoupon = [favoriteCoupon];
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return next(new ErrorHandler("User not found", 400, res));
    }

    const existingStore = favoriteCoupon.filter((couponId) =>
      user.favoriteCoupon.includes(couponId)
    );

    if (existingStore.length > 0) {
      return next(
        new ErrorHandler(
          `This coupon is already in the user's favorites`,
          400,
          res
        )
      );
    }

    user.favoriteCoupon.push(...favoriteCoupon);
    await user.save();

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

const FavoriteOffer = catchAsyncError(async (req, res, next) => {
  try {
    const userId = req.user._id;
    let favoriteOffer = req.params.id;

    if (!Array.isArray(favoriteOffer)) {
      favoriteOffer = [favoriteOffer];
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return next(new ErrorHandler("User not found", 400, res));
    }

    const existingStore = favoriteOffer.filter((offerId) =>
      user.favoriteOffer.includes(offerId)
    );

    if (existingStore.length > 0) {
      return next(
        new ErrorHandler(
          `This offer is already in the user's favorites`,
          400,
          res
        )
      );
    }

    user.favoriteOffer.push(...favoriteOffer);
    await user.save();

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400, res));
  }
});

module.exports = {
  userLogin,
  getUserProfile,
  addStore,
  getStore,
  FavoriteCoupon,
  FavoriteOffer,
};
