const TaskInput = document.querySelector('#task');
const Form = document.querySelector('#task-form');
const Filter =  document.querySelector('#filter');
const TaskList = document.querySelector('ul');
const clearbtn = document.querySelector('.clear-task');

loadallevents();

function loadallevents()
{
    document.addEventListener('DOMContentLoaded', getTasks);
    Form.addEventListener('submit', addTask);
    TaskList.addEventListener('click',removeTask)
    clearbtn.addEventListener('click',removeAllTasks);
    Filter.addEventListener('keyup',filterTask);
}

function getTasks()
{
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(inputText)
    {
    const task = document.createElement('li');
    task.className = 'collection-item';
    task.appendChild(document.createTextNode(inputText));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    task.appendChild(link);
    TaskList.appendChild(task);
    });
    
}

function addTask(e)
{
    if(TaskInput.value === '')
    {
        alert('please add valid task');
        return;
    }
    
    const task = document.createElement('li');
    task.className = 'collection-item';
    task.appendChild(document.createTextNode(TaskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    task.appendChild(link);
    TaskList.appendChild(task);
    
    addTaskInLS(TaskInput.value);
    TaskInput.value = '';

    e.preventDefault();
}

function removeTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('are you sure?'))
        {
            e.target.parentElement.parentElement.remove();
            removeFromLS(e.target.parentElement.parentElement);
        }
    }
}

function removeFromLS(li)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index)
    {
        if(task === li.firstChild.textContent)
        {
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removeAllTasks()
{
    while(TaskList.firstElementChild)
    {
        TaskList.firstElementChild.remove();
        removeAllFromLS();
    }
}

function removeAllFromLS()
{
    localStorage.clear();
}

function filterTask(e)
{
    const text  = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task)
    {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block';
        }
        else
        {
            task.style.display = 'none';
        }
    })
}

function addTaskInLS(task)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
        
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
}