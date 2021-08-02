let app = new Vue({
 el:'#app',
 data:{
     product:'Socks',
     image:"assets\images\socks_green.jpg",
    inventory:20,
    inStock:true,
    details:[
        "80% cotton","20% polyester","Gender-neutral"
    ],
    variants:[
        {variantId:2234, variantColor:"green",
        variantImage:"assets\images\socks_green.jpg", inventory:12},
        {variantId:2235, variantColor:"blue",
        variantImage:"assets\images\socks_blue.jpg", inventory:0}
    ],
    cart:0
 },
 methods:{
     addToCart(){
         this.cart+=1
     },
     updateProduct(variantImage){
        this.image = variantImage
     },
     updateQuantity(variantQuantity){
        this.inventory = variantQuantity
        if(variantQuantity==0){
            this.inStock=false;
        }
        else
            this.inStock=true;
     }
 }
});