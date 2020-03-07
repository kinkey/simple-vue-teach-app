Vue.component('merdeneaComponent', {
    props: ['vioricaDeLaClejani'],
    template: '<li>Added merdeneaua {{vioricaDeLaClejani.nume}} </li>'
})

var app = new Vue({
        el: '#app',
        data: {
            merdenea: {
                numeMerdenea: '',
            },
            merdenele: [],
        },

        methods: {
            addMerdenea: function () {
                this.merdenele.push(
                    {
                        nume: this.merdenea.numeMerdenea
                    });
                this.merdenea.numeMerdenea = ''
            }
        }
    })
;
