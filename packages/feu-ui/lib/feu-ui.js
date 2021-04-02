'use strict';

const chalk = require('chalk');
const { add } = require('feu-tools');

function ui(result) {
    console.log("ui库，result入参:", result);
    console.log(chalk.greenBright("ui库, 结果为："+chalk.red(add(result, 10))));
}

module.exports = ui;
