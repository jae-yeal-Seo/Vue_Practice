// Vue.component('todo-item',{
//     props:['todo'],
//     template:`
//     <div>
//     <li v-for="item in grocerylist" v-bind:todo="item" v-bind:key="item.id">{{todo.text}}</li>
//     </div>
//     `
// })

Vue.component('supply-item',{
    props:['supplyitem'],
    template:'<li v-for="supply in supplylist" v-bind:supplyitem="supply" v-bind:key="supply.id">{{supply.text}}</li>',
    data(){
        return{
            supplylist:[
                {id:'1', text:'first'},
                {id:'2', text:'seconde'},
                {id:'3', text:'third'}
            ],
            forerror:'whaterror'
        } 
    }

})

let app = new Vue({
    el:'#app-7'
})





