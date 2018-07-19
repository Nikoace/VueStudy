
var app = new Vue({
    el: '#app',
    data: {
        list: [
            [
                {
                    id: 1,
                    name: 'God of War',
                    price: 50,
                    count:1
                },
                {
                    id: 2,
                    name: 'Persona 5',
                    price: 30,
                    count:1  
                }
            ],
            [
                {
                    id: 3,
                    name: 'Switch',
                    price: 200,
                    count:1  
                }
            ]
        ]
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(var i = 0; i < this.list[0].length; i++){
                for(var j = 0; j < this.list[1].length; j++){
                     var total = this.list[1][j].price;
                }
                var itemA = this.list[0][i].price;
               total += itemA;
            }
            return total.toString().replace(/\B(?=(\d{ 3 })+$)/g,',');
        }
    },
    methods:{
        handleReduce: function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index){
            this.list[index].count++;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        }

    }
})