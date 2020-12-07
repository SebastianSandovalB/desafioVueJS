const app = new Vue({
    el: '#app',
    data: {
        products: [],
        name: '',
        detail: '',
        price: 0,
    },
    methods: {
        addProduct: function () {
            if (this.name == "" || this.detail == "" || this.price <= 0) {
                console.log("ingrese valor")
            } else {
                this.products.push({
                    nombre: this.name,
                    descripcion: this.detail,
                    precio: this.price
                });
                this.name = "";
                this.detail = "";
                this.price = 0;
            }

        },
        editProduct: function (index) {

        },
        deleteProduct: function (index) {
            this.products.splice(index, 1);
        }
    }
})