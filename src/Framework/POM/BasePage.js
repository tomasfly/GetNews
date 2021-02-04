class BasePage {
    async clickByXpath(xpath) {
        await global.page.waitForXPath(xpath)
        const element = await page.$x(xpath)
        await element[0].click()
    }
}

module.exports = BasePage