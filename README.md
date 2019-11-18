# tdnet.xbrl.filename-to-object

tdnetのxbrlファイルネームを解析します。


## Install

```
$ npm install tdnet.xbrl.filename-to-object
```


## Usage

```js
  const fileNameToObject = require('tdnet.xbrl.filename-to-object')
  const _p = '/path/to/xbrl/081220190322494016/XBRLData/Attachment/0300000-acbs01-tse-acedjpfr-81250-2019-02-28-01-2019-04-05-ixbrl.htm'
  fileNameToObject(_p)
  /* ->{
    type: 'rvdf',
    period: null,
    consolidate: null,
    code: '87930',
    dates: '20190417405942',
    xid: '091220190417405942',
    directory: 'xbrl',
    iPath: '/path/to/xbrl/091220190417405942/tse-rvdf-87930-20190417405942-ixbrl.htm'
  }
  */
```

## API

### fileNameToObject(iXbrlFilePath)

#### iXbrlFilePath

Type: `string`

ixbrl.htmファイルのパス。決算短信の場合はパスに'Summary'が含まれているものに限る。


## Related

- [適時開示情報閲覧サービス \- 開示情報一覧](https://www.release.tdnet.info/inbs/I_main_00.html#)
- [適時開示情報のXBRL化 \| 日本取引所グループ](https://www.jpx.co.jp/equities/listing/xbrl/03.html)
- [決算短信サマリー報告書インスタンス作成要領](https://www.jpx.co.jp/equities/listing/xbrl/tvdivq00000088ai-att/325-001-02_Summary_instance.pdf)
- [決算短信サマリー企業拡張タクソノミ作成要領](https://www.jpx.co.jp/equities/listing/xbrl/tvdivq00000088ai-att/325-002-03_Summary_taxonomy.pdf)


## License

MIT © [Mick Whats](https://github.com/mick-whats)
