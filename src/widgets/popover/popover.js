import './popover.css';

export default class PopoverWidget {
  constructor(parentEl, text, title, content) {
    /*
      Параметры:
        parentEl - контейнер
        text - текст кнопки
        title - название подсказки
        content - текст подсказки
    */
    this.parentEl = parentEl;
    this.text = text;
    this.title = title;
    this.content = content;
  }

  get markup() {
    return `
        <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" id="popover-button" data-bs-placement="top"
            data-bs-title="${this.title}" data-bs-content="${this.content}">
            ${this.text}
        </button>
        <div class="popover hidden" role="tooltip" id="popover844900" style="position: absolute;" 
          data-popper-placement="top">
          <div class="popover-arrow" style="position: absolute; left: 0px; transform: translate(47px, 0px);"></div>
          <h3 class="popover-header">${this.title}</h3>
          <div class="popover-body">${this.content}</div>
        </div>
    `;
  }

  static get buttonSelector() {
    return '[id=popover-button]';
  }
  
  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
    const button = this.parentEl.querySelector(PopoverWidget.buttonSelector);
    // console.log(this.parentEl, this.constructor.submitSelector, submit);
    button.addEventListener('click', evt => this.onClick(evt));
  }

  onClick(evt) {
    evt.preventDefault();
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    // const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    console.log(popoverTriggerList)

    // const inputEl = this.parentEl.querySelector(CardNumberWidget.inputSelector),
    //   validCard = isValidCard(inputEl.value);
    // // console.log(validCard);
    // if (!validCard) {
    //   inputEl.classList.add('is-invalid');
    //   inputEl.classList.remove('is-valid');
    //   if (this.showImages && this.lastActiveCardEl !== undefined) {
    //       this.lastActiveCardEl.classList.add('disabled');
    //   } 


    // } else {
    //   const feedbackEl = this.parentEl.querySelector(CardNumberWidget.validFeedbackSelector);
    //   feedbackEl.innerHTML = `Карта идентифицирована - ${validCard[1]}`;

    //   inputEl.classList.remove('is-invalid');
    //   inputEl.classList.add('is-valid');

    //   if (this.showImages) {
    //     if (this.lastActiveCardEl !== undefined) {
    //       this.lastActiveCardEl.classList.add('disabled');
    //     } 
    //     const cardEl = this.parentEl.querySelector(`.${validCard[0]}`);
    //     // console.log(validCard, cardEl);
    //     cardEl.classList.remove('disabled');
    //     this.lastActiveCardEl = cardEl;  
    //   }
    // }
  }
}
