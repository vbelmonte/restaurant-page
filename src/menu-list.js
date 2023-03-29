export default class MenuItem {
  constructor(name, description, price) {
    this._name = name;
    this._description = description;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }
}

const calamari = new MenuItem('Calamari Fritti', 'Fried calamari served with marinara', '$9');
const bruschetta = new MenuItem('Bruschetta Alla Caprese', 'Toasted bruschetta with tomato, basil, evoo, balsamic glaze', '$7');
const polpette = new MenuItem('Polpette', 'Beef and pork meatballs in marinara', '$10');
const zuppa = new MenuItem('Zuppa Del Giorno', 'Soup of the day', '$6');

const antipastoArray = [calamari, bruschetta, polpette, zuppa];

const caprese = new MenuItem('Caprese', 'Mozzarella, basil, tomatoes, evoo, and balsamic vinegar', '$7');
const toscana = new MenuItem('Toscana', 'Chicken, pine nuts, goat cheese, spinach', '$9');
const panzanella = new MenuItem('Panezenla', 'Basil, red onions, tomatoes, evoo, balsamic vinegar, bread', '$7');
const rucola = new MenuItem('Rucola', 'Arugula, tomatoes, walnuts, shaved parmigiano', '$9');

const insalataArray = [caprese, toscana, panzanella, rucola];

const gelato = new MenuItem('Gelato', 'Strawberry, chocolate, or vanilla ice cream', '$3');
const tiramisu = new MenuItem('Tiramisu', 'Ladyfingers dipped in coffee, topped with cream, mascarpone, and cocoa powder', '$6');
const cannoli = new MenuItem('Cannoli', 'Pastry shell filled with sweet ricotta cream and cocoa chips', '$6');
const pannacotta = new MenuItem('Panna Cotta', 'Sweet, creamy gelatin topped with berry mix and berry glaze', '$5');

const dolceArray = [gelato, tiramisu, cannoli, pannacotta];

const pastaSpecial = new MenuItem('Pasta Of The Day', 'Chef\'s creation', '$12');
const seafoodSpecial = new MenuItem('Seafood Of The Day', 'Chef\'s creation with catch of the day', 'M/P');
const pizzaSpecial = new MenuItem('Pizza Of The Day', 'Chef\'s creation', '$12');
const risottoSpecial = new MenuItem('Risotto Of The Day', 'Chef\'s creation', '$12');

const specialArray = [pastaSpecial, seafoodSpecial, pizzaSpecial, risottoSpecial];

const margherita = new MenuItem('Margherita', 'Mozzarella, marinara, basil, evoo', '$12');
const pesto = new MenuItem('Pesto', 'Pesto, tomatoes, burrata', '$12');
const sergio = new MenuItem('Sergio', 'Mozzarella, brie, smoked proscuitto', '$12');
const marinara = new MenuItem('Marinara', 'Marinara, oregano, garlic, tomatoes', '$12');
const puttanesca = new MenuItem('Puttanesca', 'Mozzarella, capers, anchovies, olives, tomatoes', '$12');
const diavola = new MenuItem('Diavola', 'Tomatoes, basil, spicy salame', '$12');

const pizzaArray = [margherita, pesto, sergio, marinara, puttanesca, diavola];

const penne = new MenuItem('Penne', '', '$1');
const gnocchi = new MenuItem('Gnocchi', '', '$1');
const spaghetti = new MenuItem('Spaghetti', '', '$1');
const fettuccine = new MenuItem('Fettuccine', '', '$1');

const pastaArray = [penne, gnocchi, spaghetti, fettuccine];

const amatriciana = new MenuItem('Amatriciana', 'Tomatoes, guanciale, onions, pecorino romano', '$10');
const pestoSauce = new MenuItem('Pesto', 'Basil, pine nuts, parmigiano reggiano, evoo', '$10');
const carbonara = new MenuItem('Carbonara', 'Egg, pecorino romano, guanciale', '$10');
const cacioepepe = new MenuItem('Cacio E Pepe', 'Pecorino romano, black pepper', '$10');

const sauceArray = [amatriciana, pestoSauce, carbonara, cacioepepe];

export {
  antipastoArray, insalataArray, dolceArray, specialArray, pizzaArray, pastaArray, sauceArray,
};
