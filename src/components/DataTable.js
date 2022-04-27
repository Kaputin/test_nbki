export default {
    name: 'DataTable',
    data: () => ({
        maxRow: 50,
        isShow: false,
        headers: ['Наименование', 'Цена', 'Количество', 'Стоимость'],
    }),
    computed: {
        getDataTable: function ()  {
            let data = [];
            let n = 0;
            while (n <= this.maxRow) {
                n++;
                const item = {
                    name: this.getRandomRUHash(5),
                    price: this.getRandomArbitrary(0.01, 1000.00),
                    quantity: this.getRandomInt(1, 100),
                };
                item.cost = this.getCost(item)
                data.push(item)
            }
            return data
        },
        getTotal() {
            let total = 0
            this.getDataTable.forEach(item => {
                total = total + item.cost
            })
            return total
        }
    },
    methods: {
        getCost(item) {
            return item.price * item.quantity
        },
        showTable() {
            this.isShow = true
        },
        getRandomArbitrary(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
        },
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        getRandomRUHash(max) {
            var i, result = '';
            for(i = 0; i < max; i++) {
                result += String.fromCharCode(this.getRandomInt(1040, 1104));
            }
            return result;
        },

    }
}