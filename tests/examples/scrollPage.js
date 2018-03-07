// 網頁滾動
module.exports = {
    '@tags': ['phil'],
    'Go to 01Phil ': function (browser) {
        browser
            .url('https://philosophy.hk01.com/channel/%E6%96%87%E7%AB%A0/54406/%E6%B2%99%E7%89%B9%EF%BC%9A%E5%AD%98%E5%9C%A8%E8%88%87%E8%99%9B%E7%84%A1---EP75')
            .waitForElementVisible('body', 1000)
            .execute('scrollTo(0, 4000)')
            .pause(4000)
    },
    'Browser quit': function (browser) {
        browser
            .end();
    }
};