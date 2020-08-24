$("#app").append(`
<div id="wy24" style="display:none;">
  <h1>발견하셨군요! ❤</h1>
  <h2>Pyer를 사용해주셔서 감사합니다</h2>
  <p>- wy24</p>
  <m-button type="unelevated" id="hello">스토어에 평점 남기러 가기</m-button>
</div> 
`)

Vue.component('m-button', {
  props: [
    'type'
  ],
  template: `
  <button :class="'mdc-button mdc-button--' + type">
    <span class="mdc-button__ripple"></span>
    <slot></slot>
    
  </button>
  `
})

Vue.component('m-header', {
  template: `
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <img src="../icons/icon_48.png" class="logo"><span class="mdc-top-app-bar__title"><slot></slot></span> 
      </section>
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
        <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded go-store" aria-label="Go Chrome Store">shop</button>
        <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded view-code" aria-label="View Code">code</button>
      </section>
    </div>
  </header>
  `
})

Vue.component('m-select-list', {
  props: [
    'dataValue'
  ],
  template: `
  <li class="mdc-list-item" :data-value="dataValue">
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text"><slot></slot></span>
  </li>
  `
})

Vue.component('m-select', {
  template: `
  <div class="mdc-select mdc-select--filled mdc-select--no-label demo-width-class">
    <div class="mdc-select__anchor">
      <span class="mdc-select__ripple"></span>
      <span class="mdc-select__selected-text"></span>
      <span class="mdc-select__dropdown-icon">
        <svg
          class="mdc-select__dropdown-icon-graphic"
          viewBox="7 10 10 5">
        </svg>
      </span>
      <span class="mdc-line-ripple"></span>
    </div>
        
    <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
      <ul class="mdc-list">
        <slot></slot>
      </ul>
    </div>
  </div>
  `
})

Vue.component('m-switch', {
  template: `
  <div class="mdc-switch">
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__thumb-underlay">
      <div class="mdc-switch__thumb"></div>
      <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" aria-checked="false">
    </div>
  </div>  
  `
})

Vue.component('t-s', {
  props: [
    'title', 'subtitle'
  ],
  template: `
  <h2>{{title}} <span class="subtitle">{{subtitle}}</span></h2>
  `
})

Vue.component('save-snackbar', {
  template: `
  <div class="mdc-snackbar">
    <div class="mdc-snackbar__surface">
      <div class="mdc-snackbar__label"
      role="status"
      aria-live="polite">
        저장되었습니다. 엔트리 만들기 페이지를 새로고침 하세요.
      </div>
    </div>
  </div>
  `
})

Vue.component('m-dialog', {
  template: `
  <div class="mdc-dialog">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">
        <div class="mdc-dialog__content" id="my-dialog-content">
          <slot></slot>
        </div>
        <div class="mdc-dialog__actions">
          <button type="button" class="mdc-button mdc-dialog__button mdc-dialog-cancle" data-mdc-dialog-action="cancel">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">취소</span>
          </button>
          <button type="button" class="mdc-button mdc-dialog__button mdc-dialog-accept" data-mdc-dialog-action="accept">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">예</span>
          </button>
        </div>
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
  `
})

Vue.component('m-icon', {
  template: `<span class="material-icons" style="margin-right: 10px;"><slot></slot></span>`
})

var vm = new Vue({
  el: '#app',
  data: {}
})



// get version from manifest



