interface Point {
  x: number;
  y: number;
  getValue: () => {};
}

// étendre l'interface Point et y ajouter des fonctionnalités
interface Point {
  z: number;
}

class Geometrie implements Point {
  x = 0;
  y = 0;
  z = 0;

  getValue(): number {
    return this.x + this.y;
  }
}

const instance = new Geometrie();
console.log(instance.getValue());

// Différences entre un TYPE et une INTERFACE

// - Avec TYPE, on peu avoir les déclarations de type primitf ce qui n'est pas le cas avec les INTERFACE
// - Il est impossible d'étendre les variables déclaré avec TYPE ce qui est possible avec interface
// - Les INTERFACES peuvent être implementés par les classes
