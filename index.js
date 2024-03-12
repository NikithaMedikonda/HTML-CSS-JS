document.getElementById('form').addEventListener('mouseenter',()=>{display('form-div')});
document.getElementById('section').addEventListener('mouseenter',()=>{display('section-div')});
document.getElementById('timer').addEventListener('mouseenter',()=>{display('timer-div')});
document.getElementById('formsubmit').addEventListener('submit', (e)=>{e.preventDefault(); showData(e)});
document.getElementById('list').addEventListener('mouseover',() =>{display('list-div')});
document.getElementById('objects').addEventListener('mouseenter',() =>{display('objects-div')});

var startbutton =document.getElementById('s');
var pausebutton =document.getElementById('p');
var resetbutton =document.getElementById('r');

function display(tag){
    let names=document.getElementsByClassName('part');   
    for (let a of names){
        a.style.display ='none';
    }   
    document.getElementById(tag).style.display='flex';
}

var intervalId;
var pchange = null;
var t = parseInt(document.getElementById('time').textContent);

function start() {
    intervalId = setInterval(() => {
        t++;
        document.getElementById('time').textContent = t;
    }, 500);
   startbutton.disabled = true;
   pausebutton.disabled = false;
   resetbutton.disabled = false;
}
function pause() {
    if (intervalId) {
        if (pausebutton.textContent == 'Pause') {
            clearInterval(intervalId);
            pausebutton.textContent = "Resume";
        } else {
            start();
            pausebutton.textContent = 'Pause';
        }
    }
    startbutton.disabled = true;
    resetbutton.disabled = false;
}
function reset() {
        t = 0;
        document.getElementById('time').textContent = t;
        clearInterval(intervalId);
        startbutton.disabled = false;
        pausebutton.disabled = true;
        resetbutton.disabled = true;
    }
function showData(event){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let value = "hello!!!"+name;
    let value1 = "your email is "+email;
    document.getElementById('submit-form').innerText = value+value1;
}

var data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Citrus' }
];

function renderData() {
    const tableBody = document.getElementById('data-body');
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td><button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteItem(id) {
data = data.filter(item => item.id !== id);
renderData();
}
renderData();

var person =[{
    name: "John",
    age: 49,
    place: "Hyderabad"},
    {
    name: "Sujatha",
    age: 40,
    place: "Hyderabad"},
    {
    name: "Sahitha",
    age: 18,
    place: "Hyderabad"
  }];

  function renderobj() {
    const tableBody = document.getElementById('data-obj');
    tableBody.innerHTML = '';

    person.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = 
        `<td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.place}</td>`;
        tableBody.appendChild(row);
    });
  }
  renderobj();
  
  function toggleNavbar(){
    var navbar= document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }