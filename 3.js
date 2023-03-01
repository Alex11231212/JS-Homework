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
  }

  static allowedFilters = new Map([
    ['contains', (field, value) => field.includes(value)],
    ['starts', (field, value) => field.startsWith(value)],
    ['ends', (field, value) => field.endsWith(value)],
    ['<', (field, value) => +field < +value],
    ['=', (field, value) => +field === +value],
    ['>', (field, value) => +field > +value],
    ['<=', (field, value) => +field <= +value],
    ['>=', (field, value) => +field >= +value],
  ]);

  filter(request) {
    let filter = Filter.allowedFilters;
    let filteredProducts = [];
    let result;

    let args = request.replace(/\-/g, ' ').replace(/(>=|<=|=|>|<\d+)/g, '$1 ').split('&');
    this._products.forEach((product) => {
      for (let str of args) { 

        let arr = str.split(' ');

        let field = arr[0];
        let operator = arr[1];
        let value = arr[2];
        
        if (field in product && filter.has(operator)) {
          result = filter.get(operator)(product[field], value);
          if (!result) break;
        } 
      }
      if (result) filteredProducts.push(product);
    });   
    return filteredProducts;
  }  
}

let iphone = new Product('iPhone 14', 1000, 100, "The iPhone");
let android = new Product('fd Pixel 7 fd', 1000, 5, "Google Pixel abc");
let sneakers = new Product('Nike Cortez fd', 200, 1000, "The Nike Cortez abc");

let products = [iphone, android, sneakers];

let filter = new Filter(products);

console.log(...filter.filter('name-contains-fd&price->=2&quantity->5&description-ends-abc'));
console.log(...filter.filter('name-starts-fd&quantity-=5'));