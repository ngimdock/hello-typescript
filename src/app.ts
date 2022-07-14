console.log("Implementation des allias et Génerics");

// déclaration des allias de types reutilisable
type User = { name: string; age: number };
type DateScring = string;
type Id = number | string;
type userName = User["name"];
type userType = keyof User;
type tab1 = (string | number)[];
type tab2 = Array<string | number>;
type identity<ArgType> = (arg: ArgType) => ArgType;

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

// cette fonction étant prends un argument qui étends la proprité length d'un autre type
function consoleSize<ArgType extends { length: number }>(
  arg: ArgType
): ArgType {
  console.log(arg.length);
  return arg;
}

const abb = consoleSize(["19"]);

const compteur = document.querySelector<HTMLButtonElement>("#increment");
