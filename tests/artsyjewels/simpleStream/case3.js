// 登入

module.exports = {
  'tags': ['testcase3'],
  'Login Action': function (browser) {
    browser
      .url(`https://www.artsyjewels.com/`)
      .waitForElementVisible('body', 1000)
      .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
      .click(`#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account`)
      .setValue('#CustomerEmail', 'linao2645900@yahoo.com.tw')
      .setValue('#CustomerPassword', 'Inputing Your password.')
      .click('#customer_login > div > input')
      .pause(2000)
      .end()
  }
}