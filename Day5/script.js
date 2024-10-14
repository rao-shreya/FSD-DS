// function display(){
//     alert("Hello JS");
// }
// function display() {
//     console.log("Hello JS");
// }

// var x=12 //global declare

// function display(){
//     console.log("Hello JS",x);
// }
// let x=14
// console.log("Hello JS",x);
// display();


// let x=12.23;
// let y="Hello";
// console.log(typeof y);

// let z= true;
// let obj={
//     'name':'Shreya',
//     id:12,
// }

// let ar=[12,2,3,4,4];
// let a;
// let b=null;
// console.log(typeof a);

function validate(){
    let un=document.getElementById('un').value;
    let pass=document.getElementById('pass').value;
    if(un=='admin' && pass=='admin')
        document.getElementById("res").innerHTML = "Login Success";
    else
    document.getElementById("res").innerHTML = "Login Failed";    
    
}