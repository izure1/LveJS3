import setHiddenContext from './Utils/setHiddenContext';

import LveJSObjectSession from './LveJSObjectSession';
import getPropertiesProxy from './Utils/getPropertiesProxy';

import PROXY_HANDLER_ATTRIBUTE from './Objects/Vars/PROXY_HANDLER.ATTRIBUTE.js';


class LveJSObject extends LveJSObjectSession {

  constructor(w, u) {

    let t;
    super(w, u);

    t = getPropertiesProxy.call(this, this, PROXY_HANDLER_ATTRIBUTE);
    setHiddenContext.call(t, 'context', [t]);

    // 객체의 속성 수정을 감지할 수 있는 새로운 프록시 객체를 만듭니다.
    // 이 프록시 객체가 해시테이블에 스택으로 존재하며, 실제 객체는 레퍼런스 변수로서만 남습니다.

    return t;

  }

}

export default LveJSObject;