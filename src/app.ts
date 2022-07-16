// On peux utiliser les enum quand on à besoin de sauvegarder des états donnés

// Par défaut typescript attribut une clé à chaque élément qui est son indice
enum STEPS {
  intro,
  selection,
  panier,
  paiement,
}

// on peux nous même définir les clé par des chaines de caractères par exemple
enum STEPS2 {
  intro = "intro",
  selection = "selection",
  panier = "panier",
  paiement = "paiement",
}

const step: STEPS = STEPS.selection;
const step2: STEPS2 = STEPS2.paiement;

console.log(step);
console.log(STEPS[step]);

console.log(step2);
