#!/usr/bin/env node

const say = require('say')
let text = process.argv.splice(2.2).join(" ");
say.speak(`${text}`);


