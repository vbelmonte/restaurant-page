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

export { antipastoArray, insalataArray, dolceArray };
