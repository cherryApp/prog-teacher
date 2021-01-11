#!/usr/bin/env node

// Get packages.
const open = require('open');
const cli = require('../lib/cli');
const App = require('../lib/app');

// Get cli parameters.
( async () => {
    const practice = cli.input[0];
    const directory = cli.flags.directory;
    let app = null;
    
    if (!practice || !directory) {
        console.log(cli.help);
    } else {
        app = await App.init(practice, directory);
    }
})();
