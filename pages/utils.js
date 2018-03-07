module.exports = function (browser) {
  this.openBrowser = function () {
    browser
      .windowMaximize()
      .url(`https://www.artsyjewels.com/`)
      .waitForElementVisible('body', 1000)
      .assert.title('Artsyjewels- High quality fashion jewelry at a reasonable price')
    return browser;
  };
  this.loginMainButton = function () {
    browser
      .click(`#shopify-section-header > div > header > div > div.grid__item.small--one-half.medium-up--one-third.text-right.site-header__icons.site-header__icons--plus > div > a.site-header__account`)
  };
  this.adminLogin = function () {
    browser
      .setValue('#CustomerEmail', 'linao2645900@yahoo.com.tw')
      .setValue('#CustomerPassword', 'Type Your Password')
      .click('#customer_login > div > input')
  }
  this.forgotpassword = function () {
    browser
      .click('#RecoverPassword')
      .setValue('#RecoverEmail', ['linao2645900@yahoo.com.tw', browser.Keys.ENTER])
    // .click('input.btn:nth-child(1)') 直接設定ENTER
  }
  this.closeBrowserButton = function () {
    browser
      .pause(2000)
      .end()
  }
  return this;
};
