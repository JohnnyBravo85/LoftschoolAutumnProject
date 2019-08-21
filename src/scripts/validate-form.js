class Validate {
  constructor() {
    this.form = 'js-form';
    this.name = 'js-name';
    this.email = 'js-email';
    this.textarea = 'js-textarea';
    this.btn = 'js-submit-btn';

    this.label = 'js-label';
    this.errorBlock = 'js-validate-error';

    this.errorClassName = 'has-error'


    this.emptyFieldMessage = 'Пожалуйста заполните поле!';
    this.incorrectEmailMessage = 'Пожалуйста введите корректный em@il!';

    this.isFieldCorrect = {
      name: false,
      email: false,
      textarea: false
    }
  }

  init() {
    this._initElements();
    this._bindEvents();
  }

  _initElements() {
    this.$form = document.querySelector(`.${this.form}`);

    this.$name = this.$form.querySelector(`.${this.name}`);
    this.$inputName = this.$name.querySelector('input');
    this.$email = this.$form.querySelector(`.${this.email}`);
    this.$inputEmail = this.$email.querySelector('input');
    this.$textarea = this.$form.querySelector(`.${this.textarea}`);
    this.$inputTextarea = this.$textarea.querySelector('textarea');

    this.$btn = this.$form.querySelector(`.${this.btn}`);
  }

  _bindEvents() {
    this.$btn.addEventListener('click', (event) => {
      event.preventDefault();

      const isFormFilledFields = this.checkForm();

      const name = this.$inputName.value;
      const mail = this.$inputEmail.value;
      const comment = this.$inputTextarea.value;

      let formData = new FormData();

      formData.append('name', name);
      formData.append('to', mail);
      formData.append('phone', '89997777777');
      formData.append('textarea', comment);

      if(isFormFilledFields) {
        
        fetch(`https://webdev-api.loftschool.com/sendmail`, {
          method: 'POST',
          headers: {
            "X-Requested-With":"XMLHttpRequest" 
          },
          body: formData
        }).then((response) => {
          return response.json();
        }).then((info) => {
          return info.message;
        }).then((message) => {
          this.showModal(message);
          this.$form.reset(message);
        }).catch(() => {
          this.showModal('Ошибка! We have some problems, Sorry!')
        })
      }
    });

    this.$inputName.addEventListener('change', (event) => {
      this.inputChangeHandler(event, 'name');
    });

    this.$inputEmail.addEventListener('change', (event) => {
      const isValidEmail = event.target.checkValidity();
      const emailRegStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
      const regEmailObj = new RegExp(emailRegStr, 'u');

      if(isValidEmail && regEmailObj.test(this.$inputEmail.value)) {
        this.inputChangeHandler(event, 'email');
      } else if (isValidEmail === false || regEmailObj.test(this.$inputEmail.value) === false) {
          this.showErorrMessage(event.target, this.incorrectEmailMessage)
      }
    });

    this.$inputTextarea.addEventListener('change', (event) => {
      this.inputChangeHandler(event, 'textarea');
    });
  }
  
  inputChangeHandler(event, inputName) {
    if(event.target.value.length) {
      this.isFieldCorrect[inputName] = true;
      this.removeErorrMessage(event.target);
    } else {
      this.isFieldCorrect[inputName] = false;
      this.showErorrMessage(event.target, this.emptyFieldMessage);
    }
  }

  checkForm() {
    let result = true;

    if(!this.isFieldCorrect.name) {
      this.showErorrMessage(this.$inputName, this.emptyFieldMessage)
    }

    if(!this.$inputEmail.value.length) {
      this.showErorrMessage(this.$inputEmail, this.emptyFieldMessage)
    }

    if(!this.isFieldCorrect.textarea) {
      this.showErorrMessage(this.$inputTextarea, this.emptyFieldMessage)
    }

    for (const field in this.isFieldCorrect) {
      if({}.hasOwnProperty.call(this.isFieldCorrect, field) && this.isFieldCorrect[field] === false) {
        result = false;
        break;
      }
    }

    return result;
  }

  showErorrMessage(element, message) {
    const parentErrorBlock = element.closest(`.${this.label}`);
    const messageEl = parentErrorBlock.querySelector(`.${this.errorBlock}`);

    messageEl.innerText = '';
    messageEl.classList.add(this.errorClassName);
    messageEl.innerText = message;
  }

  removeErorrMessage(element) {
    const el = element.closest(`.${this.label}`).querySelector(`.${this.errorBlock}`);
    el.classList.remove(this.errorClassName);
  }

  showModal(message) {
    const container = document.querySelector('.wrapper');
    const popup = document.createElement('div');
    const body = document.querySelector('body');

    popup.classList.add('popup');
    let innerMarkUp = document.querySelector('#form-popup').innerHTML;
    popup.innerHTML = innerMarkUp;


    container.appendChild(popup);
    let popupText = popup.querySelector('.popup__content');
    popupText.innerHTML = message;

    const closePopupButton = popup.querySelector('.popup__btn-close');

    body.classList.add('body--active');

    closePopupButton.addEventListener('click', function (event) {
      event.preventDefault();
      container.removeChild(popup);
      body.classList.remove('body--active');
    });
  }
}

export default Validate;