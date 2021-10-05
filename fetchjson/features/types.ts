const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  #name = '';
  constructor(name: string) {
    this.#name = name;
  }
  showColor = () => console.log(this.#name);
}

const red = new Color('red');
red.showColor();
console.log(red);
