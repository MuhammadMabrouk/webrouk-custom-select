const webroukCustomSelectTemplate = document.createElement("template");
webroukCustomSelectTemplate.innerHTML = `
  <style>
    :host {
      --primary-color-fb: hsl(218, 95%, 54%);
      --bg-one-fb: hsl(225, 6%, 13%);
      --bg-two-fb: hsl(225, 6%, 18%);
      --inputs-bg-fb: hsl(225, 6%, 15%);
      --inputs-disabled-bg-fb: hsl(225, 6%, 17%);
      --text-color-fb: hsl(0, 100%, 100%);
      --border-color-fb: hsl(225, 6%, 25%);
      --success-color-fb: hsl(135, 60%, 40%);
      --danger-color-fb: hsl(355, 70%, 55%);
      --height-size-fb: 44px;
      --radius-size-fb: 0.63rem;
    }
    :host * {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .select-holder {
      position: relative;
      color: var(--text-color, var(--text-color-fb));
    }
    ::slotted(select) {
      display: none;
    }
    :host(.disabled) .select-styled {
      background-color: var(--inputs-disabled-bg, var(--inputs-disabled-bg-fb));
      cursor: not-allowed;
    }
    :host(.invalid) .select-styled {
      color: var(--danger-color, var(--danger-color-fb));
      border-color: var(--danger-color, var(--danger-color-fb));
    }
    :host(.invalid) .select-styled:after {
      background-color: var(--danger-color, var(--danger-color-fb));
    }
    :host(.valid) .select-styled {
      color: var(--success-color, var(--success-color-fb));
      border-color: var(--success-color, var(--success-color-fb));
    }
    :host(.valid) .select-styled:after {
      background-color: var(--success-color, var(--success-color-fb));
    }
    .select-styled {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: var(--height-size, var(--height-size-fb));
      line-height: var(--height-size, var(--height-size-fb));
      background-color: var(--inputs-bg, var(--inputs-bg-fb));
      border: 1px solid var(--border-color, var(--border-color-fb));
      border-radius: var(--radius-size, var(--radius-size-fb));
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
    }
    :host-context([dir="ltr"]) .select-styled {
      padding-right: var(--height-size, var(--height-size-fb));
      padding-left: 14px;
    }
    :host-context([dir="rtl"]) .select-styled {
      padding-left: var(--height-size, var(--height-size-fb));
      padding-right: 14px;
    }
    .select-styled:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      height: calc(var(--height-size, var(--height-size-fb)) * 0.15);
      width: calc(var(--height-size, var(--height-size-fb)) * 0.25);
      background-color: var(--text-color, var(--text-color-fb));
      -webkit-clip-path: polygon(50% 100%, 0 0, 100% 0);
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
    :host-context([dir="ltr"]) .select-styled:after {
      right: 16px;
    }
    :host-context([dir="rtl"]) .select-styled:after {
      left: 16px;
    }
    :host(:not(.disabled)) .select-styled:focus {
      color: var(--primary-color, var(--primary-color-fb));
      border-color: var(--primary-color, var(--primary-color-fb));
    }
    :host(:not(.disabled)) .select-styled:focus:after {
      background-color: var(--primary-color, var(--primary-color-fb));
    }
    .select-styled .icon {
      width: 24px;
      max-height: 16px;
      -o-object-fit: contain;
      object-fit: contain;
      -webkit-filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.54));
      filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.54));
    }
    :host-context([dir="ltr"]) .select-styled .icon {
      margin-right: 16px;
    }
    :host-context([dir="rtl"]) .select-styled .icon {
      margin-left: 16px;
    }
    .select-styled .search {
      display: block;
      position: absolute;
      top: -1px;
      right: -1px;
      left: -1px;
      width: calc(100% + 2px);
      height: var(--height-size, var(--height-size-fb));
      background-color: var(--inputs-bg, var(--inputs-bg-fb));
      color: inherit;
      padding-left: 14px;
      padding-right: 14px;
      border: 0;
      border-radius: var(--radius-size, var(--radius-size-fb));
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    .options-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      position: absolute;
      z-index: 1000;
      top: calc(100% + 2px);
      left: 0;
      width: calc(100% - 12px);
      max-height: 200px;
      background-color: var(--bg-one, var(--bg-one-fb));
      border: 1px solid var(--border-color, var(--border-color-fb));
      -webkit-box-shadow: 0px 8px 32px hsla(0, 0%, 0%, 10%);
      box-shadow: 0px 8px 32px hsla(0, 0%, 0%, 10%);
      overflow-y: auto;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      opacity: 0;
      -webkit-transform: translate(6px, 10px);
      -ms-transform: translate(6px, 10px);
      transform: translate(6px, 10px);
    }
    .options-list::-webkit-scrollbar {
      display: block;
      width: 5px;
      background-color: var(--bg-two, var(--bg-two-fb));
    }
    .options-list::-webkit-scrollbar-thumb {
      background-color: var(--primary-color, var(--primary-color-fb));
    }
    .options-list .noResults {
      padding: 4px 14px;
    }
    .options-list .option-item {
      padding: 4px 14px;
      cursor: pointer;
      -webkit-transition: all 0.15s ease-in;
      -o-transition: all 0.15s ease-in;
      transition: all 0.15s ease-in;
    }
    .options-list .option-item .icon {
      width: 24px;
      max-height: 16px;
      -o-object-fit: contain;
      object-fit: contain;
      -webkit-filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.54));
      filter: drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.54));
    }
    :host-context([dir="ltr"]) .options-list .option-item .icon {
      margin-right: 16px;
    }
    :host-context([dir="rtl"]) .options-list .option-item .icon {
      margin-left: 16px;
    }
    .options-list .option-item.selected,
    .options-list .option-item:hover {
      background-color: var(--primary-color, var(--primary-color-fb));
      color: hsl(0, 100%, 100%);
    }
    .select-holder:not(.active) .select-styled .search {
      display: none;
    }
    .select-holder.active .select-styled > *:not(.search) {
      display: none;
    }
    .select-holder.active .select-styled:after {
      display: none;
    }
    .select-holder.active .options-list {
      visibility: visible;
      opacity: 1;
      -webkit-transform: translate(6px, 0);
      -ms-transform: translate(6px, 0);
      transform: translate(6px, 0);
    }
  </style>

  <div class="select-holder" part="root">
    <slot></slot>
  </div>
`;

class WebroukCustomSelect extends HTMLElement {

  _value;

  _selectHolder;
  _selectEl;
  _selectStyled;
  _searchEl;
  _optionsList;
  _noResultsEl;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(webroukCustomSelectTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this._value           = this.getAttribute("value");

    this._selectHolder    = this.shadowRoot.querySelector(".select-holder");
    this._selectEl        = this.shadowRoot.querySelector("slot").assignedNodes().find(el => el.nodeName === "SELECT");

    this._selectEl.value  = this._value;

    this._selectHolder.insertAdjacentHTML("beforeend", "<div class='select-styled' tabindex='0' part='select-styled'></div>");
    this._selectStyled    = this._selectHolder.querySelector(".select-styled");

    // initialize select styled data
    this._selectStyledInit();
    this._selectEl.addEventListener("change", this._selectStyledInit.bind(this));
    this._selectEl.addEventListener("input", this._selectStyledInit.bind(this));

    this._selectHolder.insertAdjacentHTML("beforeend", "<ul class='options-list' part='options-list'></ul>");
    this._optionsList   = this._selectHolder.querySelector(".options-list");

    // open select menu
    this._selectStyled.addEventListener("click", this._onOpeningSelectMenu.bind(this));
    this._selectStyled.addEventListener("keydown", this._onOpeningSelectMenu.bind(this));

    // actions on select an option
    this._optionsList.addEventListener("click", this._onSelectingOption.bind(this));
    this._optionsList.addEventListener("keydown", this._onSelectingOption.bind(this));

    // close the dropdown menu on click outside
    document.addEventListener("click", this._onClosingSelectMenu.bind(this));
    document.addEventListener("keydown", this._onClosingSelectMenu.bind(this));
  }

  disconnectedCallback() {
    this._selectEl.removeEventListener("change", this._selectStyledInit);
    this._selectEl.removeEventListener("input", this._selectStyledInit);
    this._selectStyled.removeEventListener("click", this._onOpeningSelectMenu);
    this._selectStyled.removeEventListener("keydown", this._onOpeningSelectMenu);
    this._optionsList.removeEventListener("click", this._onSelectingOption);
    this._optionsList.removeEventListener("keydown", this._onSelectingOption);
    document.removeEventListener("click", this._onClosingSelectMenu);
    document.removeEventListener("keydown", this._onClosingSelectMenu);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === null || oldVal === newVal) { return; }

    if (name === "value") {
      this._numberVal(newVal);
    }
  }

  static get observedAttributes() {
    return ["value"]
  }

  // initialize select styled data
  _selectStyledInit() {
    const searchEl = `<input class="search" type="search" placeholder="${this.getAttribute("search-placeholder") || 'Search...'}" part="search">`;
    const selectedOption = this._selectEl.options[this._selectEl.selectedIndex] || this._selectEl.options[0];
    const iconUrl = selectedOption.getAttribute("data-icon-url");
    const optionIcon = iconUrl ? `<img class="icon" src="${iconUrl}" part="icon">` : "";

    this._selectStyled.innerHTML = `${searchEl}${optionIcon}<span>${selectedOption.text}</span>`;
  }

  // generate select options
  _generateSelectOptions() {
    this._optionsList.innerHTML = "";
    const noResultsMsg = this.getAttribute("no-results") || "No results found...";
    this._optionsList.insertAdjacentHTML("afterbegin", `<li class='noResults' part='no-results' hidden>${noResultsMsg}</li>`);

    for (let i = 0; i < this._selectEl.options.length; i++) {
      const optionText = `<span>${this._selectEl.options[i].text}</span>`;
      const optionValue = this._selectEl.options[i].value;
      const iconUrl = this._selectEl.options[i].getAttribute("data-icon-url");
      const optionIcon = iconUrl ? `<img class="icon" src="${iconUrl}">` : "";
      let optionClasses = ["option-item"];

      this._selectEl.selectedIndex === i && optionClasses.push("selected");

      const optionClass = optionClasses.length ? ` class="${optionClasses.join(" ")}"` : "";

      this._optionsList.insertAdjacentHTML("beforeend", `<li${optionClass} data-value="${optionValue}" tabindex="0" part="option-item">${optionIcon}${optionText}</li>`);
    }
  }

  // open select menu
  _onOpeningSelectMenu(e) {
    // return if it's disabled
    if (this._selectEl.disabled === true) { return; }

    if (e.type === "click" || (e.key && e.key === "Enter")) {

      // show this select dropdown menu
      this._selectHolder.classList.add("active");

      // generate select options
      this._generateSelectOptions();

      // scroll to the selected item when the menu opens
      if (this._optionsList.querySelector(".selected") != null) {
        this._optionsList.scroll({ top: this._optionsList.querySelector(".selected").offsetTop });
      }

      // show search input
      this._searchEl = this._selectHolder.querySelector(".search");
      this._searchEl.value = "";
      this._searchEl.focus();
      this._searchEl.addEventListener("click", (e) => e.stopPropagation());

      // filter results on typing in search input
      const filterResults = () => {
        this._optionsList.querySelectorAll(".option-item").forEach((el) => {
          if (el.innerText.toLowerCase().indexOf(this._searchEl.value.toLowerCase()) === -1) {
            el.setAttribute("hidden", "");
          } else {
            el.removeAttribute("hidden");
          }

          // show no-results-msg if there is no results
          this._noResultsEl = this._optionsList.querySelector(".noResults");

          if (this._optionsList.querySelectorAll("li:not(.noResults):not([hidden])").length === 0) {
            this._noResultsEl.removeAttribute("hidden");
          } else {
            this._noResultsEl.setAttribute("hidden", "");
          }

          this._noResultsEl.addEventListener("click", (e) => e.stopPropagation());
        });
      };
      this._searchEl.addEventListener("input", filterResults);
    }
  }

  // actions on select an option
  _onSelectingOption(e) {
    let option;
    let index;

    if (e.target) {
      option = e.target.closest(".option-item");
      if (!option) { return };
    }

    if (e.type === "click" || (e.key && e.key === "Enter")) {
      this._selectStyled.innerHTML = `${this._searchEl}${option.innerHTML}`;
      this._selectEl.value = option.getAttribute("data-value");

      this._optionsList.querySelectorAll(".option-item").forEach((el, i) => {
        if (el === option) {
          index = i;
          el.classList.add("selected");
        } else {
          el.classList.remove("selected");
        }
      });

      // close the dropdown menu on click outside
      this._selectHolder.classList.remove("active");

      this._selectEl.dispatchEvent(new Event("change"));
      this._selectEl.dispatchEvent(new Event("input"));
      if (this._selectEl.closest("form")) {
        this._selectEl.closest("form").dispatchEvent(new Event("change"));
        this._selectEl.closest("form").dispatchEvent(new Event("input"));
      }
      this._selectEl.options[index].setAttribute("selected", "");
    }
  }

  // close the dropdown menu on click outside
  _onClosingSelectMenu(e) {
    if (e.type === "click" || (e.code && e.code === "Escape")) {
      !this.contains(e.target) && this._selectHolder.classList.remove("active");
    }
  }
}

window.customElements.define("webrouk-custom-select", WebroukCustomSelect);
