import getSceneObj from './Helpers/getSceneObj';
import instanceOf from './Functions/instanceof';


export default function LveQuery(u) {

  let r;
  let camera;

  camera = this.lve.current.camera;

  /*
   *  문자열로 검색하거나, 숫자 등 단말노드로 검색했을 때
   * 
   */
  switch (typeof u) {
    case 'number':
      u += '';
    case 'string':
      {
        switch (u) {
          case '*':
            {
              r = this.hashTable.select();
              break;
            }
          case '[USING_SCENE]':
            {
              r = getSceneObj.call(this.hashTable.select(), camera.scene);
              break;
            }
          case '[using_scene]':
            {
              r = getSceneObj.call(this.hashTable.select(), camera.scene);
              break;
            }
          case '[USING_CAMERA]':
            {
              if (instanceOf(camera)) {
                r = [camera];
              }
              break;
            }
          case '[using_camera]':
            {
              if (instanceOf(camera)) {
                r = [camera];
              }
              break;
            }
          default:
            {
              r = this.hashTable.select(u);
              break;
            }
        }
        break;
      }

      /*
       *  Objects, 또는 LveJSObjectSession으로 검색했을 때
       * 
       */
    default:
      {
        // session
        if ('context' in u) {
          r = u.context;
          u = u.name;
        } else {
          // Objects
          if (lve.instanceof(u)) {
            r = [u];
            u = u.name;
          }
          // 잘못된 검색 시도
          else {
            r = null;
            u = null;
          }
        }
        break;
      }
  }

  return r;

};