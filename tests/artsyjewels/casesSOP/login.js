// rewrite testcase3
const utils = require('../../../pages/utils')
module.exports = {
  '@tags': ['login'],

  before: function (browser) {
    utils(browser).openBrowser()
  },
  'Go to the login page': function (browser) {
    utils(browser).loginMainButton()
  },
  'login as admin': function (browser) {
    utils(browser).adminLogin()
  },
  after: function (browser) {
    utils(browser).closeBrowserButton()
  },

}