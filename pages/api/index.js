require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const next = require("next");
const routes = require("next-routes");
const connectDB = require("../../db");
const LoginUser = require("./router/user");
const Merchants = require("./router/merchantRoute");
const Coupon = require("./router/coupon");
const Conatct = require("./router/contact");
const Offer = require("./router/offer");
const Rating = require("./router/rating");
const Brand = require("./router/brand");
const CreateDeals = require("./router/deals");
const Subscribe = require("./router/subscribe");
const Join_deals = require("./router/join_deals");
const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
const server = next({ dev: true });
const nextRoutes = routes();
const routerHandler = nextRoutes.getRequestHandler(server);

server.prepare().then(() => {
  app.use(express.json());
  app.use(cors());
  app.use("/api", LoginUser);
  app.use("/api", Merchants);
  app.use("/api", Coupon);
  app.use("/api", Conatct);
  app.use("/api", Offer);
  app.use("/api", Rating);
  app.use("/api", Brand);
  app.use("/api", CreateDeals);
  app.use("/api", Subscribe);
  app.use("/api", Join_deals);
  app.use("/uploads", express.static("uploads"));
  app.get("*", routerHandler);
  connectDB();
  app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
  });
});
