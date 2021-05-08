require('dotenv').config()
module.exports = {
    env: {
        URL: process.env.URL,
        SERVER_URL: process.env.SERVER_URL,
        REALTIME_SERVER_URL: process.env.REALTIME_SERVER_URL,
    },
}