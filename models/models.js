const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  pasword: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
})

const Profile = sequelize.define('profile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: {
    type: DataTypes.STRING,
    notNull: true,
  },
  firstname: {
    type: DataTypes.STRING,
    notNull: true,
  },
  reiting: { type: DataTypes.INTEGER, defaultValue: '0' },
  datebirth: { type: DataTypes.DATEONLY },
  quantityview: { type: DataTypes.INTEGER, defaultValue: '0' },
  datereg: { type: DataTypes.DATE },
  nicname: { type: DataTypes.STRING, unique: true },
})
const Photo = sequelize.define('photo', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING, allowNull: false },
  name: {
    type: DataTypes.STRING,
    notNull: true,
  },
  mainphoto: { type: DataTypes.BOOLEAN, defaultValue: false },
  avatar: { type: DataTypes.BOOLEAN, defaultValue: false },
})
const Sex = sequelize.define('sex', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})
const Gender = sequelize.define('gender', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
})

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
})
const Frends = sequelize.define('frends', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  follow: { type: DataTypes.BOOLEAN, allowNull: false },
})
const Message = sequelize.define('message', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
  datesend: {
    type: DataTypes.DATE,
  },
  read: { type: DataTypes.BOOLEAN, allowNull: false },
})

User.hasOne(Profile)
Profile.belongsTo(User)

Rating.hasMany(User)
User.belongsTo(Rating)

User.hasMany(Message)
Message.belongsTo(User)

Profile.hasMany(Frends)
Frends.belongsTo(Profile)

Frends.hasMany(Rating)
Rating.belongsTo(Frends)

Message.hasMany(Frends)
Frends.belongsTo(Message)

Profile.hasMany(Photo)
Photo.belongsTo(Profile)

Sex.hasMany(Profile)
Profile.belongsTo(Sex)

Gender.hasMany(Profile)
Profile.belongsTo(Gender)

module.exports = {
  User,
  Profile,
  Message,
  Frends,
  Rating,
  Photo,
  Sex,
  Gender,
}
