// javascript

let user_input = prompt("Please enter username:");
let username_arr=['dev123','deev345','info123','langoor_id_1'];
for (let i=0;i<=username_arr.length;i++){
    if(username_arr[i]==user_input){
        let user_pass = prompt("Please enter the password");
        let pass_arr=['1234','5678','xyzaa','jacksparrow'];
        if(pass_arr[i]==user_pass){
            console.log('Welcome back ' +user_input);
        }
        else{
            console.log('Wrong Password!')
            break;        
        }
        break;
    }
    else{
        console.log('sorry user not found');
        break;
    }
    
}