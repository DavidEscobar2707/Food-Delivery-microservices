const dotEnv  = require("dotenv")

if (process.env.NODE_ENV !== 'prod') {
    const configFile =  `./.env`;
    dotEnv.config({ path:  configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN,
}

