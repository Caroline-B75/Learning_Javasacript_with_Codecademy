const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
    },
  get appetizers() {},
  set appetizers(input) {},
  get mains() {},
  set mains(input) {},
  get desserts() {},
  set desserts(input) {},
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: courseName,
      dish: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is appetizer: ${appetizer.dish}, main: ${main.dish}, dessert: ${dessert.dish}. The price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 6);
menu.addDishToCourse('appetizers', 'tapas', 5);
menu.addDishToCourse('appetizers', 'mimoza eggs', 4);
menu.addDishToCourse('mains', 'Greek Salad', 9);
menu.addDishToCourse('mains', 'Tortilla', 8);
menu.addDishToCourse('mains', 'Paella', 12);
menu.addDishToCourse('desserts', 'apple pie', 4);
menu.addDishToCourse('desserts', 'crème brulée', 3);
menu.addDishToCourse('desserts', 'chocolat', 5);

let meal = menu.generateRandomMeal();
console.log(meal);