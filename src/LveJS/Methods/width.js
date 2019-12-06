import {
  SET_INFORMATION_TEXT as JOB_SYMBOL
} from './Vars/SYMBOL'


/**
 * @description 이 객체의 실질적 너비를 수치화하여 반환합니다
 */
export default function width() {

  let t

  t = this.get()

  if (!t) {
    return null
  }

  t.__system__.suppressJob.immediately(JOB_SYMBOL)

  return t.__system__.style.width

}