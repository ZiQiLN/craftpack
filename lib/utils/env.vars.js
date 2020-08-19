const dotenv = require('dotenv')

dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
	NODE_ENV,
}
