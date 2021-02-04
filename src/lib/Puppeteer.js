const puppeteer = require('puppeteer');

class Puppeteer {
    constructor() {
    }

    async init() {
        global.browser = await puppeteer.launch();
    }
}

module.exports = Puppeteer