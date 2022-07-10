console.log("Implementation des allias et Génerics");

// déclaration des allias de types reutilisable
type User = { name: string; age: number };
type DateScring = string;
type Id = number | string;

//utilisation des allias de types
const person: User = { name: "ngimdock", age: 22 };
const birthDay: DateScring = "09-06-2000";

function deleteUser(idUser: Id): void {
  console.log(idUser);
}
