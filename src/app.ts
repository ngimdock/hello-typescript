console.log("APPRENDRE LE NARROWING SUR TYPESCRIPT");

// Test des types primitifs
function printId(id: string | number) {
  if (typeof id === "number") console.log(id * 10);
  else console.log(id.toUpperCase());
}

// Test des types primitifs
function testVariableDeTypePrimaire(a: number | string, b: boolean | string) {
  if (a === b) {
    console.log(
      " Dans ce scope d'execution, typescript saura que a et b sont de type string car c'est le seul type qu'ils ont en cummun il faut survoler les deux variables pour voir leur types"
    );

    console.log({ valeurA: a.toUpperCase(), valeurB: b.toUpperCase() });
  } else {
    console.log(
      "dans ce scop d'exécution typescript saura que a et b sont de typ diffiffent. Survoler les variables a et b pour voir leur types"
    );

    console.log({ a, b });
  }
}

// Test des types conplexes
function testVariableDeTypeComplexe(a: string | Date) {
  if (a instanceof Date) {
    console.log(
      " Typescript sait que dans ce scope, a est un objet de type Date. il faut survoler a pour voir sont type "
    );

    console.log(a.getDay);
  } else {
    console.log(
      " Typescript sait que dans ce scope, a est de type string. il faut survoler a pour voir sont type "
    );

    console.log(a.toUpperCase());
  }
}

//Test des tableaux
function testVariableDeTypeTableau(a: number[] | string) {
  if (Array.isArray(a)) {
    console.log(a[0]);
  } else {
    console.log(a.toString);
  }
}

// Tester avec l'option "in"

function exemple(a: MouseEvent | HTMLInputElement) {
  if ("value" in a) {
    console.log(
      " Dans ce scope typescript saura que a est de type HTMLInputElement car cet object à une clé 'value' "
    );

    console.log(a.value);
  } else {
    console.log(a.clientX);
  }
}

// customser ses types
function isDate(a: any): a is Date {
  return a instanceof Date;
}

function exempleTest(b: string | Date): void {
  if (isDate(b)) {
    console.log(b);
  }
}
