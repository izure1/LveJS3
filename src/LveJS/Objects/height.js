/**
 * @description 이 객체의 실질적 높이를 수치화하여 반환합니다
 */
export default function height() {

  let t;

  t = this.get();

  if (!t) {
    return null;
  }

  return t.__system__.style.height;

};