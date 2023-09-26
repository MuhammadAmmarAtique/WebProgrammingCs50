// 1.Function which runs when user clicks on button ( It is acting as Event handler)


// let value=0;

// function counter() {

//     // value=value+1;
//     // value+=1;
//     value++;
//     console.log(value);

//     if(value % 10 ==0)
//     {
//         alert(`The counter is at: ${value}`);
//     }
    
// };

// 2.Dom Manipulation

// let button=document.querySelector('.btn');
// button.addEventListener('click',toggle);

// function toggle() {
//     if (button.innerHTML==='Hi') {
//         button.innerHTML='Bye';
//     }
//    else
//     {
//         button.innerHTML='Hi';
//     }
    
// }

// 3.Adding Event listener in Html form

// const nameform= document.getElementById('nameform');

// nameform.addEventListener('submit',()=>{

//     const username= document.getElementById('username').value;
//     alert(`Hello, ${username}!`);

// })

// 4.Changing CSS through JS

const hello=document.querySelector('#hello');

let btnone=document.querySelector('#btnone');
btnone.addEventListener('click',function ()
{
    hello.style.color='red';
})

let btntwo=document.querySelector('#btntwo');
btntwo.addEventListener('click',function ()
{
    hello.style.color='green';
})

let btnthree=document.querySelector('#btnthree');
btnthree.addEventListener('click',function ()
{
    hello.style.color='blue';
})