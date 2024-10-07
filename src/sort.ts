

const programmingLanguages: string [] = ["JavaScript", "Phython", "Java", "C++", "Ruby", "PHP", "Swift", "TypeScript", "Go", "Rust"];
console.log("Das sind die verfügbaren Programmiersprachen", programmingLanguages);
// function to sort alphabetically 
console.log(programmingLanguages.sort());
// now we build a function for sorting 
function sortAlphabetically(arr: string[]): string [] {
    return arr.sort();
}
sortAlphabetically(programmingLanguages);
console.log(sortAlphabetically, programmingLanguages);

const europeanCountries: string [] = ["France", "Germany", "Sweden", "Great Britain", "Czech Republic", "Switzerland"]
console.log(europeanCountries);
sortAlphabetically(europeanCountries)
// here we use the function for european countries
// Array-TS-Sort-Level-1_2(sort + reverse)
let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
const sortDescending = (a: string, b: string): number => {
    return b.localeCompare(a);
}
codingLanguages.sort(sortDescending)
console.log("sortiere absteigend");
console.log(codingLanguages);

function sortDescendingWithSort(arr: string[]): string[]{
    return arr.sort(sortDescending)
}
console.log("DescendingWithSort");
console.log(sortDescendingWithSort([...codingLanguages]));
function sortDescendingWithReverse(arr:string[]): string[]{
    return arr.sort().reverse();
}
console.log("DescendingWithReverse");
console.log(sortDescendingWithReverse([...codingLanguages]));
// ts_vertiefung_array_sort_1_3
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log(numArray1);
console.log(("StartArray"));
console.log(numArray1);
// ascending
const ascendingSort = (a: number, b: number): number => a - b; 
numArray1.sort(ascendingSort);
console.log(numArray1);
const descendingSort = (a: number, b: number): number => b - a; 
numArray1.sort(descendingSort);
console.log(numArray1);
// array-ts-sort-level-2_2
let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];
const ascerndingNum = (a:number, b: number): number => a - b; 
console.log(ascerndingNum);

console.log("Aufsteigende Sortierung der Zahlen");
console.log(numArray);
numArray.sort((a:number, b:number): number => a -b)
console.log(numArray);

















