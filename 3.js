class Product {

  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}


class Filter {
  
  constructor(arrayOfProducts) {
    this._products = arrayOfProducts;
    this._filteredProducts = [];
  }

  static allowedFilters = new Map([
    ['contains', (value, field) => this._products.forEach((obj) => obj[field].includes(value))],
    ['starts', ],
    ['ends', ],
    ['<', ],
    ['=', ],
    ['>', ],
    ['<=', ],
    ['>=', ],
  ]);

  filer(request) {

    let args = request.replace(/\-/g, ' ').replace(/(\d+)&/g, ' $1&').split('&');
    args.forEach(str => {
      let arr = str.split(' ');

      let field = arr[0];
      let operand = arr[1];
      let value = arr[2];

      this._products.forEach((product) =>{
        if (field in product && Filter.allowedFilters.has(operand)) {
          
        }
      });


    });

    // console.log(args);
    // return this._filteredProducts;
  }
  
}

let iphone = new Product('iPhone 14', 1000, 100, "The iPhone");
let android = new Product('Pixel 7', 1000, 66, "Google Pixel");
let sneakers = new Product('Nike Cortez', 200, 1000, "The Nike Cortez");

let products = [iphone, android, sneakers];

let filer = new Filter(products);

filer.filer('name-contains-fd&price->=2&quantity->5&description-ends-abc');
// filer.filer('name-starts-fd&quantity-=5');