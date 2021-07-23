Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

let app = new Vue({
    el:'#app-7',
    data:{
        grocerylist:[
            {id:'1',text:'first sentence'},
            {id:'2',text:'middle sentence'},
            {id:'3',text:'final sentence'}
        ]
    }
})





