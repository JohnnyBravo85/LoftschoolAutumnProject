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
    this.$email = this.$form.querySelector(`.${this.email}`);
    this.$textarea = this.$form.querySelector(`.${this.textarea}`);
    this.$btn = this.$form.querySelector(`.${this.btn}`);
  }

  _bindEvents() {
    this.$btn.addEventListener('click', (event) => {
      event.preventDefault();

      const isFormFilledFields = this.checkForm();

      const name = this.$name.value;
      const email = this.$email.value;
      const textarea = this.$textarea.value;

      let formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('textarea', textarea);

      fetch(`https://webdev-api.loftschool.com/sendmail`, {
        method: 'POST',
        body: formData
      }).then((response) => {
        return response.json();
      }).then((info) => {
        return info.message;
      }).then((message) => {
        //popup
        this.$form.reset();
      }).catch(() => {
        //popup
      })
    });

    this.$name.addEventListener('change', (event) => {
      this.inputChangeHandler(event, 'name');
    });

    this.$email.addEventListener('change', (event) => {
      const isValidEmail = event.target.checkValidity();
      const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
      const regEmail = new RegExp(emailStr, 'u');

      if(isValidEmail && regEmail.test(this.$email.value)) {
        this.inputChangeHandler(event, 'email');
      } else if (isValidEmail === false || regEmail.test(this.$email.value) === false) {
        console.log(this.incorrectEmailMessage)
      }
    });

    this.$textarea.addEventListener('change', (event) => {
      this.inputChangeHandler(event, 'textarea');
    });
  }
  
  inputChangeHandler(event, inputName) {
    if(event.target.value.lenght) {
      this.isFieldCorrect[inputName] = true;
      console.log(this.emptyFieldMessage)
    } else {
      this.isFieldCorrect[inputName] = false;
      this.showErorrMessage(event.target, this.emptyFieldMessage)
      console.log(this.emptyFieldMessage)
    }
  }

  checkForm() {

  }

  showErorrMessage(element, message) {
    const parentFormBlock = element.closest(`.${this.label}`);
    const messageBlock = parentFormBlock.querySelector(`.${this.errorBlock}`);

    messageBlock.innerText = '';
    messageBlock.classList.add(this.errorClassName);
    messageBlock.innerText = message;
  }
}

export default Validate;