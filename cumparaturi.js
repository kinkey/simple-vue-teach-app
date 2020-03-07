Vue.component('shopItem', {
    props: ['itemProperty'],
    template: '<tr>' +
        '<td>{{itemProperty.itemName}}</td>' +
        '<td>{{itemProperty.itemQuantity}}</td>' +
        '<td>{{itemProperty.itemBrand}}</td>' +
        '<td v-on:click="$emit(\'remove\')">X</td>' +
        '</tr>',
})

var app = new Vue({
        el: '#cumparaturi',
        data: {
            shopItem : {
                nume: '',
                cantitate : '',
                marca : ''
            },
            items : [],
            marciDeProdus : [
                'Bunica', 'Pepsi', 'Mona',
                'Subway', 'McDonalds', 'Cotnari'
            ],
            brandNou: ''
        },
        methods: {
            addProdus: function(){
                this.items.push({
                    itemName : this.shopItem.nume,
                    itemQuantity : this.shopItem.cantitate,
                    itemBrand: this.shopItem.marca
                })
                this.shopItem.nume='';
                this.shopItem.cantitate='';
                this.shopItem.marca = ''
            },
            addBrand: function(){
                this.marciDeProdus.push(this.brandNou);
            },
            removeItem : function(item){
                var index = this.items.indexOf(item);
                let confirmation =
                    window.prompt("Confirm?");
                if (index !== -1 && confirmation==='Yes'){
                    this.items.splice(index, 1);
                }
            }

        }
    })
;
