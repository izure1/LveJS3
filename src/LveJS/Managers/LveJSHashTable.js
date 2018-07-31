/*
 *  LveJSHashTable
 *
 *  생성된 객체들은 이곳에 검색 키워드(selector)가 저장됩니다.
 *  해시 테이블은 검색 키워드 관리를 좀 더 수월하게 도와주며, 사용자에게 큰 의미는 없습니다.
 *
 *  각 LveJS 월드마다 각각의 해시 테이블을 가집니다. 해시 테이블은 월드 간 공유되지 않습니다.
 *
 */

class LveJSHashTable {

  constructor() {
    this.table = {};
  }

}


LveJSHashTable.prototype.insert = function (name, item) {

  if (name in this.table === false) {
    this.table[name] = [];
  }

  if (this.select(name, selected => selected === item).length) {
    return;
  }

  this.table[name].push(item);

};


LveJSHashTable.prototype.select = function (name = '*', filter = () => {
  return true
}) {

  let r;

  if (name === '*') {

    r = [];

    for (let p in this.table) {

      r = [...r, ...this.table[p]];

    }

    return r;

  }

  if (!(name in this.table)) {
    this.table[name] = [];
  }

  return this.table[name].filter(filter);

};


LveJSHashTable.prototype.update = function (name, news, filter = () => {
  return true
}) {

  let lists;

  if (!(name in this.table)) {
    this.table[name] = [];
  }

  lists = this.table[name].filter(filter);


  for (let item of lists) {

    this.delete(name, selected => selected === item);
    this.insert(news, item);

  }

};


LveJSHashTable.prototype.delete = function (name, filter = () => {
  return true
}) {

  if (!(name in this.table)) {
    return;
  }

  let i;
  let match;

  i = this.table[name].length;

  while (i--) {

    match = filter(this.table[name][i]);

    if (!match) continue;

    this.table[name].splice(i, 1);

  }

  if (!this.table[name].length) {
    delete this.table[name];
  }

};


export default LveJSHashTable;