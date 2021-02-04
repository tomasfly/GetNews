const Page = require('./Framework/Page')
const BasePage = require('./Framework/POM/BasePage')
const ScreenConfiguration = require('../config/Screen')
const NEWS_XPATH = '//*[text() = "Noticias"]'
const HERRAMIENTAS = '//*[text() = "Herramientas"]'
const ORDENAR_POR = '//*[text() = "Ordenados por importancia"]'
const ORDENADOS_POR_FECHA = '//*[text() = "Ordenados por fecha"]'
const chalk = require('chalk');
const log = console.log;
const Sentiment = require('./Framework/Helper/Sentiment')

class News extends BasePage {
  async getNews(newsString) {
    global.page = await Page.buildPage(ScreenConfiguration)
    await global.page.goto(`https://www.google.com/search?q=${newsString}&tbm=nws&source=lnt&tbs=sbd:1&sa=X`);
    const heading = await page.$('div[role=heading]')
    const text = await (await heading.getProperty('textContent')).jsonValue();
    const sentiment = Sentiment.analyze(text)
    log(`${newsString}${chalk.blue.bgRed.bold(text)}`);
    log(sentiment)
  }
}


module.exports = News
