const { Profile } = require('../models/models')
const ApiError = require('../error/ApiError')
class ProfileController {
  async create(req, res) {
    const {
      lastname,
      firstname,
      reitingId,
      datebirth,
      quantityview,
      datereg,
      nicname,
      photoId,
      sexId,
      genderId,
      frendsID,
    } = req.body
  }
  async getAll(req, res) {}
}

module.exports = new ProfileController()
