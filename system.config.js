module.exports = {
    apps: [{
        name: 'schoolServer',
        script: 'app/index.js',
        instances: "1",
        autorestart: true,
        watch: true,
        exec_mode: "cluster",
        max_memory_restart: '2G',
        node_args: "--max_old_space_size=4096",
        time: true,
        env_local: {
            NODE_ENV: 'local',
            dbHost: 'localhost',
            dbUser: 'root',
            dbPassword: 'root',
            dbName: 'schooldatabase',
            host: 'localhost',
            port: 7005
        },
    }],
};
