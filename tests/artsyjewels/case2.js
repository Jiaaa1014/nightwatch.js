// 搜尋某項商品

module.exports = {
  'tags': ['testcase2'],
  'Search functionality is working': function (browser) {
    browser
      .url(`https://www.artsyjewels.com/`)
      .waitForElementVisible('body', 1000)
      .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
      .setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input', ['silver bracelets', browser.Keys.ENTER])
      .pause(1000)
    browser
      .assert.title('silver bracelets – Artsyjewels')
      .assert.urlContains('https://www.artsyjewels.com/search?q=silver+bracelets');
    browser.saveScreenshot('./screenshots/case2-2.jpg')
      .end()
  }
}
