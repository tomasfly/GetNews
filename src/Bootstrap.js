const News = require('./News')
const Puppeteer = require('./lib/Puppeteer')

const companies = ['Tesla', 'Apple', 'Amazon', 'Facebook', 'Google', 'Johnson Johnson', 'Visa', 'Nvidia', 'JPMorgan', 'Adobe', 'Netflix', 'Intel']

async function start() {
    const p = new Puppeteer()
    await p.init()
    const news = new News()
    for (const iterator of companies) {
        const element = companies[iterator]
        await news.getNews(iterator)
    }
    await browser.close()
}

start()

