

function addTask(){

    user_input = document.getElementById('task_name_input').value;
    document.getElementById('task_name_input').value = "";
    
    if(user_input == ""){
        alert("Please enter your task");
    }
    else{
        div_parent = document.getElementById('list_div');

        task_div = document.createElement('div');
        
        i_check_btn = document.createElement('input');
        i_text_span = document.createElement('span');
        i_close_btn = document.createElement('span');

        i_check_btn.type = 'checkbox';
        i_check_btn.className = 'task_check_btn'; 
        i_check_btn.onclick = function(){
            if(this.checked){
                this.parentElement.style = 'text-decoration: line-through';
            }
            else{
                this.parentElement.style = 'text-decoration: none';
            }
        }

        
        i_text_span.appendChild(document.createTextNode(user_input));

        i_close_btn.className = 'close_btn';
        img = document.createElement('img');
        img.setAttribute('src', 'styles/close.png');
        img.setAttribute('class', 'close_btn');
        i_close_btn.appendChild(img);
        i_close_btn.onclick = function(){
            this.parentElement.style.display = 'none';
        }

        task_div.className = 'alert alert-secondary';

        task_div.appendChild(i_check_btn);
        task_div.appendChild(i_text_span);
        task_div.appendChild(i_close_btn);
        
        div_parent.appendChild(task_div);
    }
    
}