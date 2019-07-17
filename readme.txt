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