const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

routes

  // DEVS Endpoint
  .get("/devs", DevController.index)
  .post("/devs", DevController.create)

  .get("/search", SearchController.index);

module.exports = routes;
