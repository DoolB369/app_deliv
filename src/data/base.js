const axios = require('axios')

class Menu {
    constructor() {
        this.items = [
            { 
              id: 1,
              name: 'Hotdog bacon cheese', 
              price: 10.59, 
              desc:'200gr chicken + cheese  Lettuce + tomato' 
            },
            { 
              id: 2,
              name: 'Hotdog bacon chip', 
              price: 16.49, 
              desc:'200gr chicken + cheese  Lettuce + tomato' 
            },
            { 
              id: 3,
              name: 'Hotdog flago', 
              price: 12.62, 
              desc:'200gr chicken + cheese  Lettuce + tomato' 
            }
          ]

          this.cart = []
    }

    addItem(item) {
        this.cart.push(item);
        console.log(this.cart);
    }

    menu() {

      axios.get('http://localhost:8080/menu/all')
      .then(function (response) {
        this.cart = response.data
      })
      .catch(function (error) {
        console.error(error)
      })
      
    }

}

export default Menu;