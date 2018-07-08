var env = process.env.ENV || 'dev'
, path = require('path')
, configs = {};

configs.dev = {
    port: 1300,
    httpsPort: 1301,
    dashboardUsers: [{
        user: 'root',
        pass: 'r00t'
    }],
    parseServer: {
        databaseURI: 'mongodb://admin:Phuc4592603!@#@handmade-shard-00-00-jzqxp.mongodb.net:27017,handmade-shard-00-01-jzqxp.mongodb.net:27017,handmade-shard-00-02-jzqxp.mongodb.net:27017/test?ssl=true&replicaSet=Handmade-shard-0&authSource=admin',
        cloud: path.resolve('./cloud/main.js'),
        appId: process.env.APP_ID || 'hand-made-id',
        appName: 'HandMade.App',
        masterKey: 'hand-made-masterkey', //Add your master key here. Keep it secret!
        serverURL: process.env.SERVER_URL || `http://192.168.1.28:1300/parse`,  // Don't forget to change to https if needed
        // liveQuery: {
        //   classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
        // }
    },
    allowInsecureHttp: true
}

configs.local = {
    port: 3000,
    httpsPort: 1311,
    dashboardUsers: [{
        user: 'root',
        pass: 'r00t'
    }],
    parseServer: {
        // databaseURI: 'mongodb://root:1nn0r1a@localhost:27017/admin?3t.connectTimeout=10000&3t.uriVersion=2&3t.connectionMode=direct&readPreference=primary&3t.socketTimeout=0',
        databaseURI: 'mongodb://root:1nn0r1a@192.168.1.168:27017/test?authSource=admin',
        cloud: path.resolve('./cloud/main.js'),
        appId: process.env.APP_ID || 'hand-made-id',
        appName: 'HandMade.App',
        masterKey: 'hand-made-masterkey', //Add your master key here. Keep it secret!
        serverURL: process.env.SERVER_URL || `http://localhost:3000/parse`,  // Don't forget to change to https if needed
        // liveQuery: {
        //   classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
        // }
    },
    allowInsecureHttp: true
}

module.exports = configs[env];