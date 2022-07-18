type User = { name: string; age: number; contry: string };
type DateString = string;
type StringNumber = string | number;

const user1: User = { name: "Ngimdock", age: 22, contry: "cameroun" };
const date: DateString = "09/06/2000";
const id: StringNumber = 12344475521;

console.log({ user1, date, id });

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const person = identity<User>(user1);

console.log(person.name);
