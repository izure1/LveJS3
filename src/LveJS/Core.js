import '@babel/polyfill'

import LveJS from './LveJS'


/* Light Visualnovel Engine
 *
 * Made by izure.org | 'LVE.js (C) izure.org 2016. All rights reserved.'
 * MIT LICENSE
 * -> http://izure.org
 *
 * Dev Blog -> http://blog.izure.org
 * Dev Center -> http://cafe.naver.com/lvejs
 * Release -> http://github.com/izure1/lvejs
 * wiki book -> http://cafe.naver.com/lvejs/book5084371
 */

/*  lve.js 에서, 객체를 선택하는 방법은 해당 객체의 이름(name), 또는 객체 정보(context)를, lve() 함수의 인수로 담아 호출하는 방식입니다.
 *  반환되는 값은 JSON 형태를 지니며, name, context 속성을 갖습니다. 그리고 lve.js 에서 이것을 '세션(session)'이라고 부릅니다.
 *  name 속성은 해당 세션의 이름을 칭합니다. 시스템적으로 이용되며 사용자에게 큰 의미는 없습니다.
 *  context 속성은, 해당 세션에 검색된 모든 객체들을 배열형으로 갖고 있습니다.
 *
 *  lve는 상수이며, 함수임과 동시에 이름공간(namespace)이기도 합니다.
 *  그 외 lve.js 에서 필요한 내용은 lve 상수의 속성의 형태로 저장되어 있습니다. 변수형 또는 함수형입니다. ( Ex. lve.root or lve.init() )
 */

"use strict";

(function () {

  // Object length
  Object.defineProperty(Object.prototype, '__length', {
    get() {
      let n = 0
      for (let i in this) n++
      return n
    },
    enumerable: false
  })

}())

export default LveJS