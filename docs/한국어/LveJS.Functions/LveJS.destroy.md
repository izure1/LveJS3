# LveJS.destroy(includeAsset)

> includeAsset : `Boolean`  
  불러온 모든 에셋 객체를 파괴할지 여부를 결정합니다. 기본값은 `true`입니다.
---


현재 LveJS 월드를 완전히 파괴하여 이벤트와 메모리를 비웁니다.

LveJS를 더 이상 캔버스에서 이용하고 싶지 않다면 이 함수를 이용하세요.  
LveJS 에서 사용되는 모든 메모리와 이벤트리스너를 제거합니다.

만일 현재 LveJS 월드를 파괴하고, 새로운 월드에서 에셋을 상속받아 사용하고 싶다면, `includeAsset` 매개변수를 `false`로 지정하세요. 월드는 파괴되지만, 에셋 정보를 파괴하지 않을 것입니다. 이렇게 파괴되지 않은 에셋 정보는 새로운 월드에서 `lve.loadAsset` 함수를 이용하여 상속받을 수 있습니다.

하지만 월드가 파괴될 때, 에셋 테이블 정보는 함께 삭제되므로, 반드시 그 이전에 `lve.getAssetData` 함수를 이용하여 에셋 정보를 보관하십시오. 그렇지 않을 경우, 메모리 누수가 발생합니다.

아래 예제를 참고하십시오.

```
let newWorld = new LveJS

// Bad
// You can't get asset information cause asset table was destroyed.
lve.destroy(false)


// Good
let loadedAssets = lve.getAssetData()
lve.destroy(false)
newWorld.loadAsset(loadedAssets)
loadedAssets = null


// Another good case
newWorld.loadAsset(lve.getAssetData())
lve.destroy(false)


// Bad
newWorld.loadAsset(lve.getAssetData())
lve.destroy(true)
// You can't use asset in new world cause it's destroyed by before world.
```