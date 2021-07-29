Vue.component('add',{
    template:'<button v-on:click="add">{{count}}</button>',
    data(){
        return {count:0}
    },
    methods:{
        add(){
            this.count+=1
            this.$emit('add-total',1)
        }
    }
});


let app = new Vue({
    el:'#app',
    data:{
        totalCount:0
    },
    methods:{
        totalPlus(plus){
            this.totalCount+=plus
        }
    }
});