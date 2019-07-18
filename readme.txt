Объект Vue для примеров!!!

Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
  title: "Дата данные",
  href: "//google.com",
  link: "<a href="//google.com">Google</a>"
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value;
    },
    buttonMethod(data) {
      this.title = data;
    }
  }
})

##########################################################
Данные

Функция конструктор Vue – new Vue ({})
Элемент за которым следит Vue – el: ‘#IDelemet’
Данные для отрисовки – data: {
  title: "Дата данные"
}
Дата конструкция в html - {{title}}
#########################################################
Обработка событий Vue (Директивы)

Названия событий input, focus и тд полностью совпадают с JS событиями
Можно указывать несколько методов v-on:{input="handleChange", focus="handleChange"}

Пишется в виде атрибута тега html v-on:Название события="Название написанного мною метода"
Пример: <input v-on:input="handleChange">

Во вью файле:
Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
  title: "Дата данные"
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value;
    }
  }
})
#####################################################################
Динамические значения

При передаче значения в какой либо атрибут на компоненте или на нативном js элементе, данные всегда передаются как СТРОКА!
Не путать директиву и атрибут!!!

Для передачи Динамического значения в атрибут html используют v-bind:Атрибут html
При использовании v-bind: можно использовать JS выражения, встроенные функции и методы.
Пример <a v-bind:href="href">Google</a>

Во вью файле:
Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
  title: "Дата данные",
  href: "//google.com"
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value;
    }
  }
})
#############################################

Основные директивы

v-text="title"
Если внутри элемента изменяется текст ЦЕЛИКОМ, НЕ ЧАСТЬ ТЕКСТА, А ЦЕЛИКОМ!!!, то можно использовать v-text="Нужный data:prop"
data:prop это условное обозначение данных из объекта data, например title или href т.е. v-text="title" далее просто v-text=""
Если часть текста, то надо юзать интерполяцию <p>Заголовок: {{title}}</p>

v-html="link"
Чтобы вывести в тег html надо использовать v-html, <a v-html="link"></a>

v-once
Директива, чтобы элемент отрендерился 1ин раз! <a v-html="link" v-once></a>

v-pre
Исключает элемент при обработке его рендер функцией Vue. Если в елементе нет динамических данных и он не должен быть обработан, то юзаем v-pre, и шаблон будет обрабатываться быстрее
<h1 v-pre>{{title}}</h1>

v-clock
Определяет был ли обработан элемент или нет, атрибут будет у тега пока Vue его не обработает.
<div id="app" v-clock></div>
############################################################

Краткая запись
v-on - @
Пример @input="handleChange"

v-bind - :
Пример :href="href"
############################################################

В метод можно передавать параметры
$event - встроенная в метод переменная. встроенные vue методы всегда начинаются с $

<button @click="buttonMethod("One", $event)></button>
<h1>{{example.title}}, был клик в х={{example.coordeX}}</h1>

Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
     example {
       title: "Дата данные",
       coordeX: 0
     }
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value;
    },
    buttonMethod(data, e) {
      this.title = data;
      this.example.coordeX = e.clientX;
    }
  }
})
##########################################################

Модификаторы событий.

capture
Событие срабатывает только на погружении <div @click.capture="handleChange"></div>

stop
Прекрашает всплытие

self
Указывает, что событие должно сработать конкретно на том элементе, на котором оно произошло

once
Указывает, что обработчик произойдет 1ин раз

prevent
Отмена действия по умолчанию

passive
Включает пассив мод для тач событий

left, right, middle
Нажатие левой, правой кнопки мыши, центра

enter, space, delete, esc, tab,left, right, down, up, meta, ctrl, alt,  и тд
Модификатор для книпки клавы, можно по коду например 67,68 и тд

МОДИФИКАТОРЫ ВЫСТРАИВАЮТСЯ В ЦЕПОЧКУ!!! <div @click.capture.once.stop></div>
##############################################################################
Вычисляемы свойства computed Properties

computed НЕ ПРИНИМАЕТ В СЕБЯ АРГУМЕНТЫ и ОБЯЗАТЕЛЬНО ДОЛЖЕН ЧТО ТО ВОЗВРАЩАТЬ (return)

Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
  title: "Дата данные",
  href: "//google.com",
  link: "<a href="//google.com">Google</a>"
  },
  methods: {
    handleChange(e) {
      this.title = e.target.value;
    },
    buttonMethod(data) {
      this.title = data;
    }
  }
  computed: {
    myMethod() {
      return this.title;
    }
  }
})

Пример
<div>{{myMethod}}</div>

Можно изменять computed методы за счет get и set! Get - получить, Set установить

  methods: {
    handleChange(e) {
      this.title = e.target.value;
    },
    buttonMethod(data) {
      this.title = data;
    }
  }
  computed: {
    myMethod: {
      get() {
        return this.title
      },
      set(value) {
        console.log(value)
      }
    }
  }
})
##################################

Ватчер 
  data: {}
  methods: {}
  watch: {}
#########################
Управление классами

Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
  title: "Дата данные",
  change: false,
  active: active,
  error: error,
  }
  methods : {
    myMethod () {
      this.change = !this.change;
    }
  }
})

<div :class="{active : change}"></div>
<div :class="[active, error]"></div>
#################################
Стили

Vue – new Vue ({
  el: ‘#IDelemet’,
  styles: {
    fontSize: 16px
  },
  myFont : '20px'
})

<div :style="styles"></div>
<div :style="{fontSize: myFont}"></div>

#################################
Условие

v-if
v-else В Случае с esle он ОБЯЗАТЕЛЬНО ДОЛЖЕН БЫТЬ СОСЕДНИМ ЭЛЕМЕНТОМ c v-if

<div v-if="styles"></div>
<div v-else-if="styles"></div>
<div v-else>Я буду вместо v-if</div>

Vue – new Vue ({
  el: ‘#IDelemet’,
  styles: true
})

v-show 
Элемент не изымается из разметки

<div v-show="styles"></div>
##########################################

Рендеринг списков

Vue – new Vue ({
  el: ‘#IDelemet’,
  data: {
    arr: ["1", "2"],
    obj: {
      prop: "value"
    }
    arrObj: [{name: "Bill", count: "10"}, {name: "Hill", count: "11"}],
  }
})

<li v-for="item in arr"></>
<li v-for="(item, index) in arr"></>
<p>{{item index}}</p>

<li v-for="(value, prop) in obj"></>
<p>{{prop}} : {{value}}</p>

<li v-for="item in arrObj"
    @click="myMethod"
    v-if="item.count > 1"></>
<p>{{item.name}} : {{item.count}}</p>
###########################################

Mount

На стадии "mount" содержимое DOM узла указанного в свойстве "el" полностью заменяется на результат выполнения рендер функции Vue

const vueModel = new Vue ({
  data: {
  title: "Дата данные",
})

console.log(vueModel)

vueModel.$mount('#app')

РЕАКТИВНЫ ТОЛЬКО ДАННЫЕ ИЗ ПОЛЯ data

const vueModel
###########################################

Компонент - создание

Vue.component('Название компонента', 'Настройки компонента')

Vue.component('Hello', '{
  template: '<h3>{{title}}</h3>'
  data() {
    return {
      title: "Дата данные"
    }
}')

const vueModel = new Vue ()

<div></div>
<Hello></Hello>
###########################################

Шаблон компонента

Vue.component('Hello', '{
  template: '#ID'
  data() {
    return {
      title: "Дата данные"
    }
}')

Vue.component('test', '{
  template: '<span></span>'
  data() {
    return {
      title: "Дата данные"
    }
}')

<script type="text/x-template" id="ID">
  <div>
    <h1>{{tittle}}</h1>
    <test></test>
  </div>
</script>

ВНУТРИ КОМПОНЕНТА ЛЕЖИТ ВСЕГДА 1ин Элемент!!!!

###########################################

Локальный компонет - components

Vue.component('Hello', '{
  template: '#ID',
  data() {
    return {
      title: "Дата данные"
    }
  },
  components: {
    test: {
      template: '<span></span>'
    }
  },
  mounted() { 
    console.log() Это цикл жизни компонента (mounted())
  }
  ')
  ##################################################

  :key Динамическое свойство


  <hello :key="name" v-for="name in names" :name="name" :surmane="surmane"></hello>

  Vue.component('Hello', '{
  template: '#hello',
  props: ['name', 'surmane']
}')

const vueModel = new Vue ({data() {
    return {
      name: ['1', '2', '3'],
      surmane: ['1', '2', '3']
    }
  }})
##################################################

this.$emit('abc')

<@abc=""></>


mixin form(className)
    div(class=className)
        form.form__container.j-form(action="" method="")
            .form__row
                .form__block.form__el.j-block
                    .form__title Введите ваше имя
                    label.form__input-wr.j-name
                        +icon('user', 'form__icon')
                        input.form__input#name(name="name"
                        type="text"
                        required)
                    .form__error.j-error-block
                .form__block.form__el.j-email.j-block
                    .form__title Введите ваш email
                    label.form__input-wr
                        +icon('envelope', 'form__icon')
                        input.form__input#email(name="email"
                        type="email"
                        required)
                    .form__error.j-error-block
            .form__row
                .form__block.form__el.j-text.j-block
                    .form__title Сообщение к письму
                    label.form__input-wr
                        +icon('message', 'form__icon')
                        textarea.form__input.form__textarea#message(
                        name="textarea"
                        type="text"
                        required
                        rows="2")
                    .form__error.j-error-block
            button.form__submit.form__el.btn-gradient.j-submit-btn(type="submit") Отправить
    script(type="text/x-template")#form-popup
        .popup__overlay
            .popup__container
                .popup__content
                button.popup__btn-close.btn-gradient

class Validate {
    constructor() {
        this.form = 'j-form';
        this.name = 'j-name';
        this.email = 'j-email';
        this.text = 'j-text';
        this.btn = 'j-submit-btn';
        this.block = 'j-block';
        this.errorBlock = 'j-error-block';

        this.errorClass = 'has-error';

        this.emptyErrorMessage = 'Поле не может быть пустым';
        this.incorrectEmailMessage = 'Некорректный email адрес';

        this.isFieldCorrect = {
            name: false,
            email: false,
            text: false
        };
    }

    init() {
        this._initElements();
        this._bindEvents();
    }

    _initElements() {
        this.$form = document.querySelector(`.${this.form}`);
        this.$btn = this.$form.querySelector(`.${this.btn}`);
        this.$name = this.$form.querySelector(`.${this.name}`);
        this.$inputName = this.$name.querySelector('input');
        this.$email = this.$form.querySelector(`.${this.email}`);
        this.$inputEmail = this.$email.querySelector('input');
        this.$textarea = this.$form.querySelector(`.${this.text}`);
        this.$inputTextarea = this.$textarea.querySelector('textarea');
    }

    _bindEvents() {
        this.$btn.addEventListener('click', (event) => {
            event.preventDefault();

            const isFormFulFilled = this.checkForm();
            const name = this.$inputName.value;
            const mail = this.$inputEmail.value;
            const comment = this.$inputTextarea.value;

            let formData = new FormData();

            formData.append('name', name);
            formData.append('comment', comment);
            formData.append('to', mail);

            console.log(isFormFulFilled);
            if (isFormFulFilled) {
                fetch(`https://webdev-api.loftschool.com/sendmail`, {
                    method: 'POST',
                    body: formData
                }).then((response) => {
                    return response.json();
                }).then((info) => {
                    return info.message;
                }).then((message) => {
                    this.showModal(message);
                    this.$form.reset(message);
                }).catch(() => {
                    this.showModal('Что-то пошло не так...');
                })
            }
        });


        this.$inputName.addEventListener('change', (event) => {
            this.inputChangeHandler(event, 'name');
        });

        this.$inputEmail.addEventListener('change', (event) => {
            const isValidEmail = event.target.checkValidity();
            const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
            const regEmail = new RegExp(emailStr, 'u');

            if (isValidEmail && regEmail.test(this.$inputEmail.value)) {
                this.inputChangeHandler(event, 'email');
            } else if (isValidEmail === false || regEmail.test(this.$inputEmail.value) === false) {
                this.showErrorMessage(event.target, this.incorrectEmailMessage);
            }

        });

        this.$inputTextarea.addEventListener('change', (event) => {
            this.inputChangeHandler(event, 'text');
        });

    }

    inputChangeHandler(event, inputName) {
        if (event.target.value.length) {
            this.isFieldCorrect[inputName] = true;
            this.removeErrorMessage(event.target);
        } else {
            this.isFieldCorrect[inputName] = false;
            this.showErrorMessage(event.target, this.emptyErrorMessage);
        }
    }

    checkForm() {
        let result = true;

        if (!this.isFieldCorrect.name) {
            this.showErrorMessage(this.$inputName, this.emptyErrorMessage);
        }

        if (!this.$inputEmail.value.length) {
            this.showErrorMessage(this.$inputEmail, this.emptyErrorMessage);
        }

        if (!this.isFieldCorrect.text) {
            this.showErrorMessage(this.$inputTextarea, this.emptyErrorMessage);
        }

        for (const field in this.isFieldCorrect) {
            if ({}.hasOwnProperty.call(this.isFieldCorrect, field) && this.isFieldCorrect[field] === false) {
                result = false;
                break;
            }
        }

        return result;
    }

    showErrorMessage(element, message) {
        const parentFormBlock = element.closest(`.${this.block}`);
        const messageEl = parentFormBlock.querySelector(`.${this.errorBlock}`);

        messageEl.innerText = '';
        messageEl.classList.add(this.errorClass);
        messageEl.innerText = message;
    }

    removeErrorMessage(element) {
        const el = element.closest(`.${this.block}`).querySelector(`.${this.errorBlock}`);
        el.classList.remove(this.errorClass);
    }

    showModal(message) {
        const container = document.querySelector('.wrapper');
        const popup = document.createElement('div');

        popup.classList.add('popup');
        let innerMarkUp = document.querySelector('#form-popup').innerHTML;
        popup.innerHTML = innerMarkUp;


        container.appendChild(popup);
        let popupText = popup.querySelector('.popup__content');
        popupText.innerHTML = msg;

        const closePopupButton = popup.querySelector('.popup__btn-close');

        closePopupButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            container.removeChild(popup);
        });

    }
}

export default Validate;