/**
 * namespaceのtypeは以下
 * [
  'rvfc',
  'rvdf',
  'edjp',
  'edif',
  'edus',
  'rejp', //reat
  'rrfc',
  'rrdf'
]
 *
 */

// const paths = require('./xbrlFilePaths.json')
const fileNameToObject = require('..')
// const _paths = require('./xbrlFilePaths.js')
describe('fileNameToObject test', () => {
  it('other', () => {
    expect(fileNameToObject('aaa')).toBeNull()
  })
  it('attachments', () => {
    const _p = '/path/to/xbrl/20190405/081220190322494016/XBRLData/Attachment/0300000-acbs01-tse-acedjpfr-81250-2019-02-28-01-2019-04-05-ixbrl.htm'
    expect(fileNameToObject(_p)).toBeNull()
  })
  it('rvdf', () => {
    const _p = '/path/to/xbrl/dir1/091220190417405942/tse-rvdf-87930-20190417405942-ixbrl.htm'
    expect(fileNameToObject(_p)).toMatchObject({
      type: 'rvdf',
      period: null,
      consolidate: null,
      code: '87930',
      dates: '20190417405942',
      xid: '091220190417405942',
      directory: 'dir1',
      iPath:
        '/path/to/xbrl/dir1/091220190417405942/tse-rvdf-87930-20190417405942-ixbrl.htm'
    })
  })
  it('rvfc', () => {
    const _p = '/path/to/xbrl/20190425/091220190328496992/tse-rvfc-43640-20190328496992-ixbrl.htm'
    expect(fileNameToObject(_p)).toMatchObject({
      type: 'rvfc',
      period: null,
      consolidate: null,
      code: '43640',
      dates: '20190328496992',
      xid: '091220190328496992',
      directory: '20190425',
      iPath:
        '/path/to/xbrl/20190425/091220190328496992/tse-rvfc-43640-20190328496992-ixbrl.htm'
    })
  })
  it('edjp', () => {
    const _p = '/path/to/xbrl/20190425/081220190201468648/XBRLData/Summary/tse-acedjpsm-90200-20190201468648-ixbrl.htm'
    expect(fileNameToObject(_p)).toMatchObject({
      type: 'edjp',
      period: 'year',
      consolidate: 'ConsolidatedMember',
      code: '90200',
      dates: '20190201468648',
      xid: '081220190201468648',
      directory: '20190425',
      iPath:
        '/path/to/xbrl/20190425/081220190201468648/XBRLData/Summary/tse-acedjpsm-90200-20190201468648-ixbrl.htm'
    })
  })
  it('edif', () => {
    const _p =
      '/path/to/xbrl/20190509/081220190404400822/XBRLData/Summary/tse-acedifsm-99840-20190404400822-ixbrl.htm'
    expect(fileNameToObject(_p)).toMatchObject({
      type: 'edif',
      period: 'year',
      consolidate: 'ConsolidatedMember',
      code: '99840',
      dates: '20190404400822',
      xid: '081220190404400822',
      directory: '20190509',
      iPath:
        '/path/to/xbrl/20190509/081220190404400822/XBRLData/Summary/tse-acedifsm-99840-20190404400822-ixbrl.htm'
    })
  })
})
