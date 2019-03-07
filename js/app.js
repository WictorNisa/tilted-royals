const form = document.getElementById('addForm');
const itemList = document.getElementById('items');


const duoButton = document.getElementById('duo');
const threeSquadButton = document.getElementById('threeMan');
const fourSquadButton = document.getElementById('fourMan');

const fourSquad = document.querySelector('.fourman-squad');
const threeSquad = document.querySelector('.threeman-squad');
const duoSquad = document.querySelector('.duo-squad');


const fourDisplay = fourSquad.style.display;

// change the layout based on button click
duoButton.addEventListener('click', duoLayout);
threeSquadButton.addEventListener('click', threeSquadLayout);
fourSquadButton.addEventListener('click', fourSquadLayout);

// form submit event
form.addEventListener('submit', addItem);

// delete EVENT
itemList.addEventListener('click', removeItem);


defaultLayout();

function defaultLayout() {
  duoSquad.style.display = 'none';
  threeSquad.style.display = 'none';
}

function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create a new Li element
  const li = document.createElement('li');

  // Add class name
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  const deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'deleteButton';

  // Append text node

  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clears the input automatically
  const formInput = document.querySelector('.formInput').value="";

}


function removeItem(e){
  if(e.target.classList.contains('deleteButton')){
    const li = e.target.parentElement;
    itemList.removeChild(li);
  }
}


function duoLayout(e) {
    fourSquad.style.display = 'none';
    threeSquad.style.display = 'none';
    duoSquad.style.display = 'block';
}

function threeSquadLayout(e) {
    fourSquad.style.display = 'none';
    threeSquad.style.display = 'block';
    duoSquad.style.display = 'none';
}

function fourSquadLayout(e) {
    fourSquad.style.display = 'flex';
    threeSquad.style.display = 'none';
    duoSquad.style.display = 'none';
}
