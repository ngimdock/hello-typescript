console.log("Implementation des allias et Génerics");

// déclaration des allias de types reutilisable
type User = { name: string; age: number };
type DateScring = string;
type Id = number | string;
type UserName = User["name"];
type OtherUser = keyof User;

//utilisation des allias de types
const person: User = { name: "ngimdock", age: 22 };
const birthDay: DateScring = "09-06-2000";

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const val = identity(10);

function firtTableValue<TabType>(tab: TabType[]): TabType {
  return tab[0];
}

const value = firtTableValue(["hello", "world", "i am dan"]);

const compteur = document.querySelector<HTMLButtonElement>("#increment");
