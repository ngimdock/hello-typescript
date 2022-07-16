// Le type unknown est presque même que le type any, la différence est
// que le unknown on vas faire la vérification de type avant de faire les actions or avec le any pas besion de
// faire des vérifications
function verifType(arg: unknown): void {
  if (arg instanceof HTMLInputElement) {
    arg.value = "helo world !";
  }
}

// Les tuples
const a = { isPavate: true, localhost: 3000 } as const;
const b = [1, 2, 11] as const;

const tuple: [string, number] = ["hello", 20]; //tuple non mutable et modifiable
const tab: (string | number)[] = [12, 21, 77, "world !"]; // tableau dynamique mutable et modifiabe

type ListItem = [string, number];

const c: ListItem = ["yo!", 1];
const d: ListItem = ["eh oh!", 2];

function merge<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U
): [...T, ...U] {
  return [...a, ...b];
}

const e = merge(c, [1, 2, 3]);
