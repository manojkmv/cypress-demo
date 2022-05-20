const fs = require('fs');
const path = require('path');

const env = {
    "video": false,
    "projectId":"ftk5gk",
    "reporter": "../node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
        "overwrite": false,
        "html": false,
        "json": true
    },
    "env": {
        URL: process.env.URL,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}


console.log('cypress env');
fs.writeFileSync(path.join(__dirname, '../cypress.json'), JSON.stringify(env, null, 2));
console.log('cyp env comp');