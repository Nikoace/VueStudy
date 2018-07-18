var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

app.message = 'I have changed this message'

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos: [
            { text: '学习Javascript' },
            { text: '学习Vue' },

        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
        message: 'hello vue.js'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data:{
        message: 'hello vue'
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList:[
            {id: '0',text: 'vegtable'},
            {id: '1',text: 'cheese'},
            {id: '2',text: 'whatever people eat'}
        ]
    }
})

var vm = new Vue({
    el: '#example',
    data: {
        message: 'hello'
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var vm1 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Niko',
        lastName: 'Xu'
    },
    computed: {
        fullname: function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: "I can't give you an answer until you ask the question"
    },
    watch: {
        question: function(newQuestion, oldQuestion){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function(){
            if(this.question.indexOf('?') === -1) {
                this.answer = 'Question usually contain a question mark.'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('http://yesno.wtf/api')
            .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API.' + error
                })
            }
    }
})