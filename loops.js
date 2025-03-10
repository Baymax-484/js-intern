
// javascript LOOPS
// FOR
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}
// WHILE

let j = 0;
while (j < 5) {
    console.log("Iteration while " + j);
    j++;
}

//DO WHILE

let k = 0;
do {
    console.log("Do Iteration  " + k);
    k++;
} while (k < 5);

//FOR IN

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//FOR OF

const numbers1 = [10, 20, 30, 40, 50];

for (let num of numbers1) {
    console.log(num);
}

//FOR EACH

const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(function(num) {
    console.log(num);
});


//SWITCH

let color = prompt('Please Select a color:');

switch(color) {
    case "red":
        console.log("Red is selected");
        document.getElementById('heads').style.color='red';
        break;
    case "blue":
        console.log("Blue is selected");
        document.getElementById('heads').style.color='blue';
        break;
    case "green":
        console.log("Green is selected");
        document.getElementById('heads').style.color='green';
        break;
    default:
        console.log("Unknown color");
}

//LOOPS



// let user_input = prompt("Please enter username:");
// let username_arr=['dev123','deev345','info123','langoor_id_1'];
// for (let i=0;i<=username_arr.length;i++){
//     if(username_arr[i]==user_input){
//         let user_pass = prompt("Please enter the password");
//         let pass_arr=['1234','5678','xyzaa','jacksparrow'];
//         if(pass_arr[i]==user_pass){
//             console.log('Welcome back ' +user_input);
//         }
//         else{
//             console.log('Wrong Password!')
//             break;        
//         }
//         break;
//     }
//     else{
//         console.log('sorry user not found');
//         break;
//     }
    
// }
