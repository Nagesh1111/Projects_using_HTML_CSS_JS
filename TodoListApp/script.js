const input = document.getElementById('inputbox');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const li = document.getElementsByTagName('li');
const clist = document.getElementById('clist');
const date = document.getElementById('date');
btn.addEventListener('click',function(){
    if(input.value=='' || date.value =='')
     {
        alert("please Verify Your Creation of Task and date");
     }
     else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        let d = document.createElement('p');
        d.innerHTML = new Date(date.value);
       let  stdate = new Date(date.value);
        d.classList.add('date');
        li.appendChild(d);
        li.appendChild(span);
     }
     input.value='';

})

/* &#10003; */
list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){

        let date = new Date();
        let c1 = document.createElement('p');
        let  s = document.createElement('span');
        s.innerHTML = "&#10003;";
        c1.innerHTML = e.srcElement.childNodes[0].data ;
        c1.appendChild(s);
        clist.appendChild(c1);
        e.srcElement.remove();

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false)