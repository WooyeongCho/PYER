# Pyer
![logo](https://raw.githubusercontent.com/WooyeongCho/Pyer/master/icons/icon_48.png)
<br />
엔트리 만들기 페이지에 다크 테마와 민트 테마를 적용 시켜주는 크롬 확장앱입니다.

## 스크린샷
![sc1](https://user-images.githubusercontent.com/29038818/91118448-f1efde00-e6cb-11ea-8180-5fe30f09dbeb.png)

## 설치하기
### 크롬 확장앱 스토어에서 설치하기
[설치하기](https://bit.ly/entry_pyer)
#### 특징
- 크롬 확장앱 스토어에서 설치하면 쉽고 빠르게 브라우저에 Pyer를 추가할 수 있습니다.
- 단, Pyer의 새로운 버전이 업데이트 되어도 새 버전이 스토어에 퍼블리시 될 때까지 약간의 시간이 소요되기에 빠른 업데이트를 받아볼 수 없습니다. 

### 직접 설치하기
[ZIP 다운로드하기](https://github.com/WooyeongCho/Pyer/archive/master.zip)
#### 특징
- Pyer 레포지토리를 직접 다운로드해 최신 업데이트를 빠르게 받아볼 수 있습니다.
#### 방법
1. [ZIP 다운로드하기](https://github.com/WooyeongCho/Pyer/archive/master.zip)를 클릭해 ZIP을 다운로드 받으세요.
2. 압축을 해제한 후 브라우저 위 주소창에 [chrome://extensions](chrome://extensions)를 입력하세요.
3. 개발자 모드를 활성화 하고 "압축해제된 확장 프로그램을 로드합니다." 버튼을 누르고 압축을 해제한 폴더를 선택합니다.
4. [엔트리 만들기 페이지](https://playentry.org/ws)에서 테마가 적용된 것을 확인할 수 있습니다.

## 사용하기
기본적으로 Pyer를 설치하면 다크 테마가 적용되어 있습니다.
Pyer의 활성화 상태를 지정하거나 테마를 다른 테마 혹은 사용자 테마로 변경하고 싶다면 아래를 참고하세요.
### 팝업
![popup](https://user-images.githubusercontent.com/29038818/91118500-0df37f80-e6cc-11ea-987f-f84ebfd82434.png)
브라우저 오른쪽 상단 ![logo](https://raw.githubusercontent.com/WooyeongCho/Pyer/master/icons/icon_48.png)를 클릭해 팝업을 여세요.
|섹션|설명|
|---|---|
|켜기/끄기|스위치를 클릭 해 Pyer의 활성화 상태를 지정할 수 있습니다.|
|테마 선택하기|dropdown 메뉴를 클릭 해 원하는 테마로 변경하세요.<br/>메뉴의 각 아이템에 대한 설명은 아래를 참고하세요.|
|외부 CSS 테마 열기|파일탐색기로 외부 CSS 테마 파일을 선택할 수 있습니다.|
|저장하기|Pyer 설정을 저장합니다.<br/>저장 후엔 엔트리 만들기 페이지를 새로고침 하세요.|
### 테마
|테마|파일 명|설명|
|---|---|---|
|다크 테마|default_theme/def_sans.css|tica님과 함께 제작|
|민트 테마|default_theme/def_mint_by_jwp0116.css|jedeop님이 제작|
|외부 CSS 테마|chrome local storage 내 fileData와 fileName|사용자가 선택한 외부 CSS 테마 (파일 명과 내용을 저장)|

## 도움 주신 분
큰 도움이 되었습니다. 감사드립니다.
- [tica](https://github.com/thoratica)님
  + 다크 테마 개선 참여
- [jedeop](https://github.com/jedeop)님
  + 민트 테마 제작

## 사용된 오픈 소스
- [vuejs](https://github.com/vuejs/vue)
- [jquery](https://github.com/jquery/jquery)
- [material design component](https://github.com/material-components/material-components-web/)

## License
```
MIT License

Copyright (c) 2020 WooyeongCho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```