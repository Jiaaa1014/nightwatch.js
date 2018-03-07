
## Tips reminded, Problems solved

### 副檔名不能省略

於`nightwatch.js`chromedriver.exe

```json
"selenium": {
  "start_process": true,
  "server_path": "lib/selenium-server-standalone-3.10.0.jar",
  "start_session": true,
  "log_path": "log/",
  "host": "127.0.0.1",
  "port": 4444,
  "cli_args": {
    "webdriver.chrome.driver": "lib/chromedriver.exe"
  }
},
```

### 定義步驟的tag可以有三種寫法
```js
'tags': ['testcase1'],
tags: ['testcase1'],
'@tags': ['testcase1'],
```

然後呼叫的時候

```bash
node nightwatch -e chrome -a google(tag名)
```

### 繁複的步驟SOP

utils.js

```js
module.exprots = function (browser) {/* ... */}

```

other files import `utils.js`

```js
const utils = require('utils')

// 錯誤示範
// import utils from '../../../pages/utils'

```

### 輸入送出寫法
```js
.setValue('#RecoverEmail', 'linao2645900@yahoo.com.tw')
.click('input.btn:nth-child(1)')
```
等同於
```js
.setValue('#RecoverEmail', ['linao2645900@yahoo.com.tw', browser.Keys.ENTER])
```


### nightwatch.json

用來設定以甚麼瀏覽器開啟的。
```json
"test_settings": {/*  */}
```


## 資料夾用途

`lib`用來啟動driver以及server

`log`工作日誌

`page`放個utils.js整合重複的事情

`report`xml檔

`screenshots`嗯嗯嗯

`tests`，來放一堆要測試的js檔案

```
├─lib
├─log
├─pages
├─reports
│  └─XMLReports
│      ├─artsyjewels
│      │  ├─casesSOP
│      │  └─testcases
│      └─examples
├─screenshots
└─tests
    ├─artsyjewels
    │  ├─casesSOP
    │  └─simpleStream
    └─examples
```

## 參考

[Summer](https://cythilya.github.io/2017/12/11/nightwatch-intro/)
