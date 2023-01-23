/*
renderer.js by Wooyoeng Cho
역할: popup.html에서 읽기 좋게 축약된 material component들을 본래 material component로 변경시켜줍니다. (Vue.js의 Vue.component 역할과 같음)

만든 이유는.. 기존 5.6 버전 이하에선 vue.js를 사용했으나 manifest 버전이 3으로 올라가며 unsafe-eval을 사용하면 vue js에서 eval을 쓰는 건지 오류가 뜸.. 
그래서 걍 렌더링 하는 부분을 자체 개발햇음

p.s. 아래 주석에서 '원본 html'이라 함은 'popup.html'을 의미하는 것임.

*/

// 각 material 컴포넌트들의 template들을 모아논 변수, % %안에 프로퍼티(prop)을 넣을 수 있음
let templates = {
  button: `
  <button class="mdc-button mdc-button--%type%">
    <span class="mdc-button__ripple">
    </span>
    <slot></slot>
  </button>
  `,
  header: `<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <img src="../icons/icon_48.png" class="logo"/>
      <span class="mdc-top-app-bar__title">
        <slot></slot>
      </span> 
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded go-store" aria-label="Go Chrome Store">shop</button>
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded view-code" aria-label="View Code">code</button>
    </section>
  </div>
  </header>
  `,
  select_list: `
  <li class="mdc-list-item" data-value="%data-value%">
    <span class="mdc-list-item__ripple">
    </span>
    <span class="mdc-list-item__text">
      <slot></slot>
    </span>
  </li>
  `,
  select: `
  <div class="mdc-select mdc-select--filled mdc-select--no-label demo-width-class">
    <div class="mdc-select__anchor">
      <span class="mdc-select__ripple">
      </span>
      <span class="mdc-select__selected-text">
      </span>
      <span class="mdc-select__dropdown-icon">
        <svg
          class="mdc-select__dropdown-icon-graphic"
          viewBox="7 10 10 5">
        </svg>
      </span>
      <span class="mdc-line-ripple">
      </span>
    </div> 
    <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
      <ul class="mdc-list">
        <slot></slot>
      </ul>
    </div>
  </div>
  `,
  switch: `
  <div class="mdc-switch">
    <div class="mdc-switch__track">
    </div>

    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb">
      </div>
      <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" aria-checked="false"/>
    </div>
  </div>  
  `,
  t_s: `
  <h2>%title% <span class="subtitle">%subtitle%</span></h2>
  `,
  save_snackbar: `
  <div class="mdc-snackbar">
    <div class="mdc-snackbar__surface">
      <div class="mdc-snackbar__label"
      role="status"
      aria-live="polite">
        저장되었습니다. 엔트리 만들기 페이지를 새로고침 하세요.
      </div>
    </div>
  </div>
  `,
  dialog: `
  <div class="mdc-dialog">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content">
        <div class="mdc-dialog__content" id="my-dialog-content">
          <slot></slot>
        </div>
        <div class="mdc-dialog__actions">
          <button type="button" class="mdc-button mdc-dialog__button mdc-dialog-cancle" data-mdc-dialog-action="cancel">
            <div class="mdc-button__ripple">
            </div>
            <span class="mdc-button__label">취소</span>
          </button>
          <button type="button" class="mdc-button mdc-dialog__button mdc-dialog-accept" data-mdc-dialog-action="accept">
            <div class="mdc-button__ripple">
            </div>
            <span class="mdc-button__label">예</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mdc-dialog__scrim">
    </div>
  </div>
  `,
  icon: `<span class="material-icons" style="margin-right: 10px;">
  <slot></slot>
  </span>`
}

/*
  tagName: string / 해당 태그 이름을 가진 element들을 찾음 (<m-button> 등등)
  template: string / 그 요소의 템플릿 (버튼, 스위치 등등)
  slotReplace: boolean / 템플릿의 <slot></slot> 부분을 원본 html의 slot 부분(xml 객체의 내용 부분)으로 교체시킬 건지 여부 (템플릿에 슬롯부분이 없다면 false)
  props: array / 프로퍼티 값 (원본 html에서 이 함수에서 선택된 element의 prop이란 이름을 가진 attribute의 값을 받아와 template의 %prop%에 대치시킴.)
*/
function renderComponent(tagName, template, slotReplace, props) {
  let component = document.getElementsByTagName(tagName);

  Array.from(component).forEach(
    function(element, index, array){ 
      //let elementForModifying = element; //replace 등으로 수정될 element
      let templateForModifying = template;
      let slot = element.innerHTML;
      
      // 프로퍼티 값이 존재하면 프로퍼티 개수 만큼 반복시키고 replace함.
      if(props) {
        props.forEach(prop => {
          let attribute = element.getAttribute(prop); // 현재 프로퍼티의 값
          templateForModifying = templateForModifying.replace(`%${prop}%`, attribute); // element의 %prop%을 주어진 값으로 변경
        });
      } //프롭스 폴이치 -> 현재 엘리먼트의 attribute에서 주어진 프롭스의 값을 가져온 후, 템플릿에서 %프롭%을 가져온 값으로 리플레이스
      
      if(slotReplace) {
        templateForModifying = templateForModifying.replace('<slot></slot>', slot);
        console.log(templateForModifying)
      }

      var tFM = new DOMParser().parseFromString(templateForModifying, "text/xml"); //templateForModifying의 DOM Element 화
      
      // element의 해당 att 값과 tFM(template)의 해당 att값을 합쳐줌. 
      addAttribute(element, tFM, 'class')
      addAttribute(element, tFM, 'id')
      addAttribute(element, tFM, 'style')


      // e: 원래 element, t: template, att: 특정 attribute (class, id, style 등)
      function addAttribute(e, t, att) {
        if(e.getAttribute(att) != null) { // 원래 html에서 att가 있을시 template의 att에 추가하기, 없다면 그냥 통과해서 template에 있는 att가 그대로 적용
          if(t.firstChild.getAttribute(att) != null) { // template에 att가 있을시 그거랑 함께 추가
            t.firstChild.setAttribute(att, t.firstChild.getAttribute(att) + " " + e.getAttribute(att))
          } else {
            t.firstChild.setAttribute(att, e.getAttribute(att))
          }
        }
        
      }
      
      // 최종 렌더링
      element.outerHTML = new XMLSerializer().serializeToString(tFM);
    }
);
}

// 발견하셨나요? 팝업을 띄운 후 키보드로 pyer를 입력해보세요!
$("#app").append(`
<div id="wy24" style="display:none;">
  <h1>발견하셨군요! ❤</h1>
  <h2>Pyer를 사용해주셔서 감사합니다</h2>
  <p>- wy24</p>
  <m-button type="unelevated" id="hello">스토어에 평점 남기러 가기</m-button>
</div> 
`)

//싹다 변환시키쟈
renderComponent('m-button', templates.button, true, ['type']);
renderComponent('m-header', templates.header, true);
renderComponent('m-select-list', templates.select_list, true, ['data-value']);
renderComponent('m-select', templates.select, true);
renderComponent('m-switch', templates.switch, false);
renderComponent('t-s', templates.t_s, false, ['title', 'subtitle']);
renderComponent('save-snackbar', templates.save_snackbar, false);
renderComponent('m-dialog', templates.dialog, true);
renderComponent('m-icon', templates.icon, true);

