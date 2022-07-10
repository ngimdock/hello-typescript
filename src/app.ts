const a: string = "hello world";

const b: number = 10;

const c: boolean = false;

const d: null;

const arr: string[] = ["1", "2", "salut"];

const user: {
  name: string;
  userName?: string;
  age: number;
} = {
  name: "ngimdock",
  age: 22,
};

const abj: { [key: string]: string } = { name: "danilix" };

const date: Date = new Date();

const increment = document.querySelector("#increment") as HTMLButtonElement;

const callBack: (event: MouseEvent) => void = (e: MouseEvent): number => {
  return 3;
};

function printId(id: number | string): void {
  console.log(id.toString());
}

// console.log("Get started with typescript");

// const increment = document.querySelector("#increment");
// const num = document.querySelector("#num");

// let i = 0;

// const incrementNum = (e) => {
//   i++;
//   num.innerHTML = i.toString();
// };

// increment.addEventListener("click", incrementNum);
