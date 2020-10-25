const config = {
    PORT: process.env.PORT || 4032,
    DB: process.env.DB || 'mongodb://localhost:27017/pokemon-api',
    SECRET: process.env.SECRET || 'secretos',
    ADMIN: process.env.ADMIN || 'Michael_Sarco',
    NAME: process.env.NAME || 'Api - Pokemon'
}

module.exports = config