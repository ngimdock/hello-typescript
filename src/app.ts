//utilisation du drapeau readonly pour empêcher la modification d'un argument
function reverseTab<ArrType>(arr: readonly ArrType[]): ArrType[] {
  return [...arr].reverse();
}
