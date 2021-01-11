const path = require('path');
const unzip = require('unzip');
const https = require('https');
const fse = require('fs-extra');

// Spinner.
const Spinner = require('cli-spinner').Spinner; 
const spinner = new Spinner('processing.. %s');
spinner.setSpinnerString('|/-\\');

const { readFileAsync, runCommand, httpsGetZipAsync } = require('./util');

const serverUrl = `https://nettuts.hu/practices/content/project/`;

class App {
    constructor() { }

    async init(practice, directory) {
        this.practice = practice;
        this.directory = directory;
        const targetPath = path.join(directory, practice);

        spinner.start();

        https.get(`${serverUrl}${practice}`, response => {
            response.pipe(unzip.Extract({
                path: targetPath
            })).on('finish', async () => {
                const packagePath = path.join( targetPath, 'package.json' );
                const packageContent = await fse.readFile(packagePath, 'utf8');
                const pack = JSON.parse(packageContent);

                spinner.stop();

                if (pack.scripts['post-command']) {
                    console.log(`\n-------\nNext steps:\n1. cd ${targetPath}\n2. npm run post-command`);
                    // await runCommand(`npm run --prefix ${targetPath} post-command`);
                    // await runCommand(`npm run post-command`);
                }
                if (pack['instructions']) {
                    console.log(`\n-------\nNext steps:\n${pack['instructions']}`);
                }
            });
        });
    }
}

module.exports = new App();
