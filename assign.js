//1.Write a JavaScript function to test whether a string starts with a specified string.
let main = "This is a string";
let search_one = "This";
let size_str = main.slice(0, search_one.length-1);
if (search_one == size_str) {
  console.log("True");
} else {
  console.log("False");
}
//2.Capitalize first Letter of a String

let main_string = "hello"
first=main_string[0]
cap=first.toUpperCase()
main_string = main_string.replace(first,cap)
console.log(main_string)
//3.Count Words from the String

let main_str="hi hello bye see you!"
let words_count = main_str.split(" ")
console.log(words_count.length)

//4.Reverse A string
let line_str = "hi! my name is Dev"
let reverse=""
for (let i=line_str.length;i>=0;i--)
    {
    reverse+=line_str[i];
}
console.log(reverse)

// duplicate number in array
let arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 71, 3, 6]
let dup = []
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      dup.push(arr[i])
    }
  }
}
console.log("duplicate elements are: "+dup)

// que 3. Write a JavaScript function to move an array element from one position to another.
// 0  1  2  3  4
const array = [1, 2, 3, 4, 5]
const move_index_one = 0 // index number
const move_index_two = 2 ;// index number

[array[move_index_one], array[move_index_two]] = [
  array[move_index_two],
  array[move_index_one],
]
// simple [a,b]=[b,a] -> swaping the numbers
// console.log(array)

// que 2 Write a JavaScript function to sort the following array of objects by title value.
var library = [
  { author: "Bill Gates", title: "anos", libraryID: 1254 },
  { author: "Steve Jobs", title: "thor", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "bhulk",
    libraryID: 3245,
  },
]

for (let i = 0; i < library.length; i++) {
  for (let j = i + 1; j < library.length; j++) {
    if (library[i].title > library[j].title) {
      let temp = library[i]
      library[i] = library[j]
      library[j] = temp
    }
  }
}
console.log(library)

// que 5. Write a JavaScript function to find the difference between two arrays.
let arr_1 = [10, 20, 50, 30, 40]
let arr_2 = [90, 80, 20, 10, 30]

let empty_array = [] //empty array

function array_difference() {
  let merge_arr = arr_1.concat(arr_2)

  for (let i = 0; i < merge_arr.length; i++) {
    let count = 0
    for (let j = 0; j < merge_arr.length; j++) {
      if (merge_arr[i] == merge_arr[j]) {
        count++
      }
    }

    if (count == 1) {
      empty_array.push(merge_arr[i])
    }
  }
}
array_difference()
console.log(empty_array)

// que 4.
let name_str = "hELLO wORLD"
let split_name = name_str.split("")
for (let i = 0; i < split_name.length; i++) {
  if (split_name[i] == split_name[i].toLowerCase()) {
    split_name[i] = split_name[i].toUpperCase()
  } else {
    split_name[i] = split_name[i].toLowerCase()
  }
}

console.log(split_name.join(""))