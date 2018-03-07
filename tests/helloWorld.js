module.exports = {
  'tags': ['helloworldclick'],
  'we are going to click and click on a button': function (browser) {
    browser
      .url(`https://clickclickclick.click`)
      .waitForElementVisible('body', 3000)
      .click('body > main > div > div:nth-child(1) > a')
      .pause(4000)
      .end()
    console.log('done')
  }
}