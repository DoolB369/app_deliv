class Cart {
    constructor() {
        this.itens = [];
    }

    addItem(item) {
        
        this.itens.push(item);
        // console.log(this.itens);
    }

    calTotal() {
        let total = 0;
        this.itens.forEach((item) => {
            total += item.preco;
        });
        return total;
    }
}

export default Cart;