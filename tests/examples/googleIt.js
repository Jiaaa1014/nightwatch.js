module.exports = {

  tags: ['google'],
  'Demo test Google': function (browser) {
    browser
      .url('http://www.google.com') // Go to a url
      .waitForElementVisible('body', 5000) // wait till page loads
      .assert.title('Google') // Make sure Site title matches
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'apple') // send values
      .click('button[name=btnG]') // click on search box


      .pause(2000)
      .end()

  }

};