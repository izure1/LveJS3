# LveJS3
*LveJS 3.0 ~ x.x*

## LveJS란?
LveJS는, **Light Visual novel Engine**의 약자입니다.  

웹에서 비주얼노벨을 손쉽게 구현할 수 있도록 지원하는 Web Canvas 라이브러리이며, [jQuery](https://github.com/jquery/jquery)의 문법과 비슷하기에, 기존의 jQuery 사용자는 쉽게 배울 수 있습니다.

# 지원 사양 및 동작 방법
LveJS는 공식적으로는 구글 크롬, 모질라 파이어폭스를 지원합니다.  
하지만 그 외 HTML5 Canvas를 지원하는 기타 브라우저에서도 동작할 수 있습니다.  

WebGL을 사용하지 않고, canvas API으로 동작합니다. *따라서 오브젝트가 많이 필요한 무거운 게임에는 적합하지 않습니다.*  

기본적으로 [kripken](https://github.com/kripken)의 [Box2D](https://github.com/kripken/box2d.js)의 물리엔진이 내장되어 있습니다. 
따라서 번거롭게 물리엔진을 적용하지 않아도 됩니다.  

원한다면 생성한 오브젝트의 속성을 수정하는 것만으로 물리충돌을 제어할 수 있으며, 
이는 LveJS가 비주얼노벨뿐만 아니라, 간단한 2D 게임도 구현할 수 있다는 의미입니다.

# 설치하기

다운로드 [https://www.npmjs.com/package/lve](https://www.npmjs.com/package/lve)

### npm

```
npm install lve
```

### browser

```
<script src="dist/LveJS.js"></script>
```

# 시작하기
```
const lve = new LveJS

lve.init({ canvas: '#yourCanvasSelector' }).loadAsset([
  'http://your-asset-in-here.png',
  'http://image-video-audio-and-all-type.mp4'
]).ready(() => {
  
  
  // Create image and video object on screen
  // This asset has been loaded as a loadAsset function,
  // so you do not need to wait for it to load.
  
  lve('Objects-unique-identifier').create({
    type: 'image',
    src: 'http://your-asset-in-here.png'
  })
  
  lve('Like this').create({
    type: 'video',
    src: 'http://image-video-audio-and-all-type.mp4'
  })
  
  // You can create multiple types of objects
  // camera
  // image, sprite, video, particle (need asset url (src attribute)
  // square, circle
  // text (text attribute)
  
  
  // You can also get object reference
  
  const square = lve('sample-square').create({
    type: 'square'
  })
  
  
  // Use CSS-like grammer
  
  square.css({
    width: 100,
    height: 100,
    color: 'blue',
    left: 100, // X axis
    bottom: 100, // Y axis
    perspective: 100 // Z axis
  })
  
  
  lve('hello-world').create({
    type: 'text',
    text: 'Hello, World!\n and Hello, LveJS!'
  }).css({
    fontSize: 15,
    fontFamily: 'consolas',
    fontStyle: 'italic',
    lineHeight: '150%',
    color: '#0075c8'
  })

})
```

# 예제
Github에서 프로젝트를 다운로드 받고 순서대로 `npm install` 명령어를 실행하여 의존 모듈을 설치하십시오. 이후 `npm run dev` 명령어를 실행하여 데모 페이지를 여십시오.