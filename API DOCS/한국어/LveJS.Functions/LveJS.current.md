# LveJS.current

현재 LveJS 월드의 여러 변수를 반환합니다.

```
lve.current.world // 현재 LveJS 월드를 반환합니다
lve.current.camera // 현재 사용 중인 카메라 객체를 반환합니다
lve.current.fps // 현재 프레임 정보를 반환합니다

lve.current.isPaused // 현재 월드의 일시정지 상태 여부를 반환합니다
lve.current.isStarted // 현재 월드의 시작 상태 여부를 반환합니다

lve.current.canvas // 현재 월드의 캔버스 Element를 반환합니다
lve.current.version // 이 LveJS 파일의 버전 정보를 반환합니다

lve.current.keyboard // 현재 키보드 입력이 진행중인지를 알 수 있는 유틸리티를 반환합니다
lve.current.mouse // 현재 마우스 입력이 진행중인지를 알 수 있는 유틸리티를 반환합니다
```

만일 게임을 만들고, 매 프레임이 업데이트될 때 마다 특정 키가 눌린 상태일 때 어떤 작업을 해주고 싶다면 아래와 같이 만들 수 있습니다.

```
lve.extendStart(() => {

  if (lve.current.keyboard.A.isDown) {
    console.log('A 키가 눌렸음!')
  }

  if (lve.current.keyboard.CTRL.isDown) {
    console.log('CTRL 키가 눌렸음!')
  }

  // 더 많은 키를 확인하고 싶다면 아래를 사용하세요
  console.log(lve.current.keyboard)
  console.log(lve.current.mouse)

})
```

---

> return : `Object` { world, camera, fps, isPaused, isStarted, canvas, version, keyboard, mouse  }