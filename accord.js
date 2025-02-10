// function drop(){
//     var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// }
// 


// let b=document.getElementsByClassName("faq-answer");
// let c=document.getElementsByClassName("faq-btn");
// console.log(b);
// for(let i=0; i<b.length; i++){
//     b[i].style.display="none";
// }
// function faqChange(index){
//     for(let i=0; i<b.length; i++){
//         if(i == index-1){
//             if(b[i].style.display=="block"){
//                 b[i].style.display="none";
//                 c[i].style.transition = "all 0.5s ease-in-out";
//                 c[i].style.transform = "rotate(0deg)";
//             }
//             else{
//                 b[i].style.display="block";
//                 c[i].style.transition = "all 0.5s ease-in-out";
//                 c[i].style.transform="rotate(90deg)"
//             }
//         }
//         else{
//             b[i].style.display="none";
//             c[i].style.transform="rotate(0deg)";
//         }
 
//     }
// }



let acc_btn=document.getElementsByClassName('accordian');
let acc_content=document.getElementsByClassName('panel');
let i=0;
console.log(acc_content);
function dropDown(val){
    for (i=0;i<acc_content.length;i++){
        if(i==val-1){
            if(acc_content[i].style.display=='block'){
                acc_content[i].style.display='none';
            }
            else{
                acc_content[i].style.display='block';
            }
        }
        else{
            acc_content[i].style.display='none';
        }
    }
}
