let app = new Vue({
 el:'#app',
 data:{
     product:'Socks',
     image:"assets\images\socks_green.jpg",
    inventory:20,
    details:[
        "80% cotton","20% polyester","Gender-neutral"
    ],
    variants:[
        {variantId:2234, variantColor:"green",
        variantImage:"assets\images\socks_green.jpg"},
        {variantId:2235, variantColor:"blue",
        variantImage:"assets\images\socks_blue.jpg"}
    ],
    cart:0
 },
 methods:{
     addToCart(){
         this.cart+=1
     },
     updateProduct(variantImage){
        this.image = variantImage
     }
 }
});