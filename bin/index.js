#!/usr/bin/env node

// Get packages.
const open = require('open');
const cli = require('../lib/cli');

// Get cli parameters.
const practice = cli.input[0];
const directory = cli.flags.directory;

// Open a new browser window.
const startApp = async () => {
    await open('https://nettuts.hu', {wait: true});
    return 'opened';
};

startApp().then(
    res => console.log,
    err => console.error
);
