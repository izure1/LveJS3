# timescale : `Number`

애니메이션 속도 배율입니다. 기본값은 `1`입니다.  
`sprite`, `video` 타입의 객체일 경우, 재생 속도 역시 `timescale` 속성의 영향을 받습니다.

이 값으로 애니메이션 효과의 속도를 조절할 수 있습니다. `animate`, `fadeIn`, `fadeOut`, `transition` 메서드의 효과가 빨라지거나 느려집니다.

이는 빠르게 움직이는 물체 중, 어떤 물체만 느리게 움직이는 효과를 주고 싶을 때 유용합니다.  하지만 이 속성이 *물리 효과로 인한 가속도를 계산해주지는 않습니다.*