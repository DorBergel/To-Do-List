var close = document.getElementsByClassName('close_btn');
var check_box_i = document.getElementsByClassName('form-check-input');
var i;

function newElement(){
  let uInput = document.getElementById('userInput').value;
  let li = document.createElement('li');
  let t = document.createTextNode(uInput);
  let check_btn = document.createElement('input')

  check_btn.className = 'form-check-input';
  check_btn.type = "checkbox";

  li.appendChild(check_btn);
  li.appendChild(t);
  li.className = 'list-group-item';

  if(uInput == ""){
    alert("Please enter text");
  }
  else{
    document.getElementById('mainList').appendChild(li);
  }

  

  document.getElementById('userInput').value = "";

  let span = document.createElement('span');
  t = document.createTextNode('\u00D7');
  span.className = "close_btn";
  
  span.appendChild(t);
  li.appendChild(span);

  for(i=0;i<close.length; i++)
  {
    close[i].onclick = function(){
      let current_li = this.parentElement;
      current_li.style.display = 'none';
    }
    check_box_i[i].onclick = function(){
      if(this.checked){
        this.parentElement.style = 'text-decoration: line-through';
      }
      else{
        this.parentElement.style = 'text-decoration: none';
      }
    }
  }
}

