// Lancer npx tsc --watch

// définition des types d'attriburs
class A {
  private a = 511;
  protected b = "hello";

  constructor(public c: number) {}

  getA = () => this.a;
}

//classes abstraites
abstract class Geometrie {
  protected x = 10;
  protected y = 10;

  public static origin: { x: number; y: number } = { x: 0, y: 0 };

  abstract surface(): number;
}

// classe concrête qui hérite de Géometrie et implemente toutes ses méthodes abstraites
class Triangle extends Geometrie {
  surface(): number {
    return this.x * this.y;
  }
}

console.log(Geometrie.origin);

// Définition des générics sur les classes
class Collection<T> {
  constructor(private collec: T[]) {}

  first(): T | null {
    return this.collec[0];
  }

  on(this: HTMLInputElement, name: string) {
    //modification du this
    this.addEventListener("change", () => console.log("modification"));
  }
}

const instanceA = new A(3);
const col = new Collection([1, 2, 3]);
const firstNum = col.first();
console.log(firstNum);
