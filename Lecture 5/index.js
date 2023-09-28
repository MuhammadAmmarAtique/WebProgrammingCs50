// 1.Function which runs when user clicks on button ( It is acting as Event handler)

let value=0;
value=localStorage.getItem('container');

function counter() {

    // value=value+1;
    // value+=1;
    value++;
    console.log(value);

    // if(value % 10 ==0)
    // {
    //     alert(`The counter is at: ${value}`);
    // }
    localStorage.setItem('container',value);
    
};
setInterval(counter,1000);



// 2.Dom Manipulation/toggle function

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

// const hello=document.querySelector('#hello');

// let btnone=document.querySelector('#btnone');
// btnone.addEventListener('click',function ()
// {
//     hello.style.color='red';
// })

// let btntwo=document.querySelector('#btntwo');
// btntwo.addEventListener('click',function ()
// {
//     hello.style.color='green';
// })

// let btnthree=document.querySelector('#btnthree');
// btnthree.addEventListener('click',function ()
// {
//     hello.style.color='blue';
// })

// There is redundancy in above logic so we will design a better logic.


// 5.Using data attributes for HTML elements to end redundancy in above logic

// let AllButtons=document.querySelectorAll('button');

// AllButtons.forEach((button)=>{

//     button.addEventListener('click',()=> {
//         document.querySelector('#hello').style.color=button.dataset.color;
//     })
// });


// 6.Alternative for above logic/ using select in html and applying addeventlistener to it.

// let select=document.querySelector('select');

// select.addEventListener('change',()=>
// {
//     document.querySelector('#hello').style.color=select.value;
// })


// 7.Making a to do list using JS. 
/*

// Disabling submit button by using html disabled property
document.querySelector('#submit').disabled=true;

// Adding eventhandler in "text-input-field" to active and deactive submit button based on condition.
document.querySelector("#input").onkeyup= ()=>
{
    let input =document.querySelector("#input");
    if(input.value.length > 0)
    {
        document.querySelector('#submit').disabled=false;
    }
    else
    {
        document.querySelector('#submit').disabled=true;
    }
}

// Todo list
document.querySelector('form').onsubmit= ()=>
{
    const input =document.querySelector('#input').value;

    // Creating a <li> tag using .createElement()
    const li =document.createElement('li');
    li.innerHTML=input;

    // append() will make li as a child to ul.
    document.querySelector('#tasks').append(li);

    // Clearing input field after user submitted form.
    document.querySelector('#input').value="";

    // Disabling submit button again when user submitted input, so that no empty input will appear.
    document.querySelector('#submit').disabled=true;

    // Stop "form" from sending data to a server
    return false;
}

*/

// 8.



