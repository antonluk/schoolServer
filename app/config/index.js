exports.host = process.env.host
exports.port = process.env.port
exports.dbConfig = {
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbName,
    port: 5432,
    ssl: false
}
exports.knexDbConfig = {
    client: 'pg',
    version: '7.2',
    connection: {
        host: process.env.dbHost,
        user: process.env.dbUser,
        password: process.env.dbPassword,
        database: process.env.dbName,
        port: 5432,
        ssl: false
    }
}
