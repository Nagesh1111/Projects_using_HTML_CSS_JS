const input = document.getElementById('inputbox');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const li = document.getElementsByTagName('li');
btn.addEventListener('click',function(){
    if(input.value=='')
     {
        alert("please add your task");
     }
     else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     }
     input.value='';
})
list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})