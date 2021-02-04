class Page {
    static async buildPage(configuration) {
        const page = await global.browser.newPage();
        page.setViewport(configuration)
        return page
    }
}

module.exports = Page

