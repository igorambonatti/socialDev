const axios = require("axios");
const Dev = require("../models/Dev");
const str2array = require("./utils/str2array");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json({ devs });
  },

  async create(req, res) {
    const { github, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github });
    if (devExists) return res.json(devExists);

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github}`
    );

    const { name = login, avatar_url, bio } = apiResponse.data;
    techsArray = str2array(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      github,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    return res.json(dev);
  }
};
