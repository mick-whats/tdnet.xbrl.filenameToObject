
const path = require('path')

/**
 * iXbrlのパスからfilenameを解析する
 *
 * @param {string} iPath - iXbrlを含むファイルパス
 * @returns {object} 解析結果のオブジェクト
 * @example
 * const _p = '/path/to/xbrl/20190405/081220190322494016/XBRLData/Attachment/0300000-acbs01-tse-acedjpfr-81250-2019-02-28-01-2019-04-05-ixbrl.htm'
 * fileNameToObject(_p)
 * // ->{
 *   type: 'rvdf',
 *   period: null,
 *   consolidate: null,
 *   code: '87930',
 *   dates: '20190417405942',
 *   xid: '091220190417405942',
 *   directory: 'dir1',
 *   iPath: '/path/to/xbrl/dir1/091220190417405942/tse-rvdf-87930-20190417405942-ixbrl.htm'
 * }
 */
function filenameToObject (iPath) {
  const p = path.basename(iPath)
  const ns = { iPath }
  const nso = /^tse-([\D^-]*)-(\d*)-(\d*)/.exec(p)
  if (!nso) {
    return null
  }
  if (/^\w{4}$/.test(nso[1])) {
    ns.type = nso[1]
    ns.period = null
    ns.consolidate = null
  } else {
    const ace = /^(.{1})(.{1})(.{4})(.{2})/.exec(nso[1])
    switch (ace[1]) {
      case 'a':
        ns.period = 'year'
        break
      case 's':
        ns.period = 'half'
        break
      case 'q':
        ns.period = 'quarter'
        break
      default:
        throw new Error(`namespace error (period): ${iPath}`)
    }
    ns.type = ace[3]
    switch (ace[2]) {
      case 'c':
        ns.consolidate = 'ConsolidatedMember'
        break
      case 'n':
        ns.consolidate = 'NonConsolidatedMember'
        break

      default:
        throw new Error(`namespace error (consolidate): ${iPath}`)
    }
  }
  ns.code = nso[2]
  ns.dates = nso[3]
  ns.xid = new RegExp('([^\\/]*)(\\/|\\/XBRLData\\/Summary\\/)tse-.*').exec(iPath)[1]
  ns.directory = new RegExp(`([^\\/]*)\\/${ns.xid}\\/.*`).exec(iPath)[1]
  return ns
}

// # ## iXbrlのパスからnamespaceを解析する
// # - @param [string] 拡張子.iXbrlのファイルパス
// # - @return [object] namespace

// # ```
// # {
// #   code: '19050',
// #   consolidate: 'ConsolidatedMember',
// #   dates: '20180301480955',
// #   directory: '20180511',
// #   period: 'year',
// #   type: 'edjp',
// #   xid: '081220180301480955',
// # }
// # {
// #   code: '74940',
// #   consolidate: null,
// #   dates: '20180327498651',
// #   directory: '20180511',
// #   period: null,
// #   type: 'rvfc',
// #   xid: '091220180327498651',
// # }
// # ```

module.exports = filenameToObject
