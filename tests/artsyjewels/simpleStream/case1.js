// 點入某個連結

module.exports = {
  '@tags': ['testcase1'],
  'open home page and click an header': function (browser) {
    browser
      .url(`https://www.artsyjewels.com/`)
      .waitForElementVisible('body', 1000)
      .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
      .click('#SiteNav > li.site-nav--has-dropdown.site-nav--has-centered-dropdown > a')
      .click('#SiteNavLabel-jewelry > div > div > div:nth-child(1) > ul:nth-child(3) > li > a')
      .pause(2000)
      .end()
  }
}
