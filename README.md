# Pyer
<div align=center>
  
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FWooyeongCho%2FPyer&count_bg=%2379C83D&title_bg=%23555555&icon=ghostery.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

<br />

![logo](https://raw.githubusercontent.com/WooyeongCho/Pyer/master/icons/icon_48.png)
<br />
엔트리 만들기 페이지에 테마를 적용 시켜주는 크롬 확장앱입니다.
또한 CSS 파일을 불러와 사용자 테마를 적용시키거나, 엔트리 만들기 페이지의 글꼴을 변경할 수 있습니다.

## 스크린샷
![sc1](https://user-images.githubusercontent.com/29038818/91118448-f1efde00-e6cb-11ea-8180-5fe30f09dbeb.png)

## 업데이트 내역
[Pyer 크롬 웹스토어](https://bit.ly/entry_pyer)의 설명창에서 확인할 수 있습니다.

## 설치하기
### 크롬 웹스토어에서 설치하기
[설치하기](https://bit.ly/entry_pyer)
#### 특징
- 크롬 엡스토어에서 설치하면 쉽고 빠르게 브라우저에 Pyer를 추가할 수 있습니다.
- 단, Pyer의 새로운 버전이 업데이트 되어도 새 버전이 스토어에 퍼블리시 될 때까지 약간의 시간이 소요되기에 빠른 업데이트를 받아볼 수 없습니다.

<!-- ### 파이어폭스 애드온 스토어에서 설치하기
[설치하기](http://bit.ly/entry_pyerfox) -->

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
![popupsrc](https://user-images.githubusercontent.com/29038818/91635784-35cd4500-ea36-11ea-8375-c1a62adf7abb.png)
브라우저 오른쪽 상단 ![logo](https://raw.githubusercontent.com/WooyeongCho/Pyer/master/icons/icon_48.png)를 클릭해 팝업을 여세요.
|섹션|설명|
|---|---|
|설정 저장하기|Pyer 설정을 저장합니다.<br/>저장 후엔 엔트리 만들기 페이지를 새로고침 하세요.|
|켜기/끄기|스위치를 클릭 해 Pyer의 활성화 상태를 지정할 수 있습니다.|
|테마 선택하기|dropdown 메뉴를 클릭 해 원하는 테마로 변경하세요.<br/>메뉴의 각 아이템에 대한 설명은 아래를 참고하세요.|
|외부 CSS 테마 열기|파일탐색기로 외부 CSS 테마 파일을 선택할 수 있습니다.|
|글꼴 선택하기|dropdown 메뉴를 클릭 해 원하는 글꼴로 변경하세요<br/>메뉴의 각 아이템에 대한 설명은 아래를 참고하세요.|

### 테마
|테마|파일 명|설명|
|---|---|---|
|다크 테마|default_theme/def_sans.css|tica님과 함께 제작|
|민트 테마|default_theme/def_mint_by_jwp0116.css|jedeop님이 제작|
|세피아 테마|default_theme/def_sepia.css|다크 테마를 기본으로 하여 제작|
|외부 CSS 테마|chrome local storage 내 fileData와 fileName|사용자가 선택한 외부 CSS 테마 (파일 명과 내용을 저장)|
### 글꼴
- 엔트리 기본 글꼴 (프로그램 default)
- 나눔 스퀘어
- 나눔 스퀘어 라운드
- 에스코어 드림
- IBM Plex Sans
- Pretendard (v6.0에서 추가됨)
- 나눔 스퀘어 네오 (v6.0에서 추가됨)
- 나눔바른펜 (v6.0에서 추가됨)

## 기여
큰 도움이 되었습니다. 감사드립니다.
- [tica](https://github.com/thoratica)님
  + 다크 테마 개선 참여
- [jedeop](https://github.com/jedeop)님
  + 민트 테마 제작
- [muno9748](https://github.com/muno9748)님
  + 다크 테마 개선 도움

## 사용된 오픈 소스
- [vuejs](https://github.com/vuejs/vue) (5.6 버전 이하에서만 사용됨, popup/renderer.js에서 관련 역할을 담당합니다.)
- [jquery](https://github.com/jquery/jquery)
- [material design component](https://github.com/material-components/material-components-web/)
