const { Gender } = require('../models/models')
const ApiError = require('../error/ApiError')
class GenderController {
  async create(req, res) {
    const { name } = req.body
    const gender = await Gender.create({ name })
    return res.json(gender)
  }
  async getAll(req, res) {
    const genders = await Gender.findAll()
    return res.json(genders)
  }
}

module.exports = new GenderController()
