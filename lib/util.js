const fs = require('fs');
const { exec } = require("child_process");
const https = require('https');

const readFileAsync = (path, options) => {
    return new Promise( (res, rej) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                return rej(err);
            }
            res(data);
        });
    });
};

const runCommand = (command) => {
    return new Promise( (res, rej) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return rej(error);
            }
            if (stderr) {
                return rej(stderr);
            }
            res(stdout);
        });
    });
};

const httpsGetZipAsync = (url) => {
    return new Promise( (res, rej) => {
        https.get(url, response => {
            if (response.statusCode > 399) {
                return rej(response.statusMessage);
            }
            res(response);
        });
    });
};

module.exports = {
    readFileAsync,
    runCommand,
    httpsGetZipAsync,
};
