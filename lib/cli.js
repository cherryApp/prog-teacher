const meow = require('meow');

// Process arguments.
const cli = meow(`
    Usage
      $ prog-teacher <the-name-of-the-lesson>
 
    Examples
      $ prog-teacher tr360-angular-practice-001
`, {
    flags: {
        directory: {
            type: 'string',
            alias: 'd',
            default: '.',
            isRequired: false,
        },
    }
});

module.exports = cli;
