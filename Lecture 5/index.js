// 1.Function which runs on click ( It is acting as Event handler)

// let value=0;

// function counter() {
//     // value=value+1;
//     // value+=1;
//    value ++;
//     console.log(value);
    
// };

// 2.Dom Manipulation

let button=document.getElementById('btn');
button.addEventListener('click',toggle);

function toggle() {
    if (button.innerHTML==='Hi') {
        button.innerHTML='Bye';
    }
   else
    {
        button.innerHTML='Hi';
    }
    
}