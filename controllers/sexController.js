const { Sex } = require('../models/models')
const ApiError = require('../error/ApiError')
class SexController {
  async create(req, res) {
    const { name } = req.body
    const sex = await Sex.create({ name })
    return res.json(sex)
  }
  async getAll(req, res) {
    const sexes = await Sex.findAll()
    return res.json(sexes)
  }
}

module.exports = new SexController()
