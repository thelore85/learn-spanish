///////////////////////////////////////////
// vocabulary PROjECT
///////////////////////////////////////////

// CHACHE
let startButton = document.querySelector("#start-button");
let levelSelector = document.querySelector("#level-selector");
let levelOptions = document.querySelectorAll('.level');
let ulElement = document.querySelector('#list-word');

//list management
let levelSelected;
let levelSelectedList;

//cart management
let liCardSelected;
let spanSpanishSelected;
let spanItalianSelected;
let buttonDelateSelected;



// LEVELS
const level = [  [], [],[],[],[],[],[],[],[],[],[] ]

// LEVEL LIST GENERATOR
const pushInLevel = (v,i) => {	
	if(vocabulary[i].level === 1) {return level[1].push(vocabulary[i]); }else
	if(vocabulary[i].level === 2) {return level[2].push(vocabulary[i]); }else
	if(vocabulary[i].level === 3) {return level[3].push(vocabulary[i]); }else
	if(vocabulary[i].level === 4) {return level[4].push(vocabulary[i]); }else
	if(vocabulary[i].level === 5) {return level[5].push(vocabulary[i]); }else
	if(vocabulary[i].level === 6) {return level[6].push(vocabulary[i]); }else
	if(vocabulary[i].level === 7) {return level[7].push(vocabulary[i]); }else
	if(vocabulary[i].level === 8) {return level[8].push(vocabulary[i]); }else
	if(vocabulary[i].level === 9) {return level[9].push(vocabulary[i]); }else
	if(vocabulary[i].level === 10) {return level[10].push(vocabulary[i]); }
}
vocabulary.forEach(pushInLevel)


//SELECT THE LEVEL OF THE GAME
const selectLevel = () => { levelOptions.forEach(checkSelection)}
const checkSelection = (v,i) => {
	if(levelOptions[i].selected === true){levelSelected = levelOptions[i].value;}
	ulElement.innerHTML = ""; // delate old list
}
	
//PRINT LIST SELECTED
const createWordList = () => {
	levelSelectedList = level[levelSelected]; //retunr an array of obj
	levelSelectedList.forEach(appendWordToHtml);
	listLength = level[levelSelected].length;
}

// create elements
function appendWordToHtml(v,i){
	// create HTML elements
	let li = document.createElement("li");
	let spanEs = document.createElement('span');
	let spanIt = document.createElement('span');
	let buttonDelateSelected = document.createElement('button');

	//add class to the HTML elements
	spanIt.classList.add('hidden');
	buttonDelateSelected.classList.add('hidden');

	//add event listener to element
	li.addEventListener('click', toggleCard);
	buttonDelateSelected.addEventListener('click', delateCard);
	
	// create content for HTML element
	let esp = document.createTextNode(levelSelectedList[i].es)
	let	ita = document.createTextNode(levelSelectedList[i].description)
	let x = document.createTextNode('X');

	//apply content to element 
	spanEs.appendChild(esp);
	spanIt.appendChild(ita);
	buttonDelateSelected.appendChild(x);

	// insert element in HTML file
	li.appendChild(spanEs);
	li.appendChild(spanIt);
	li.appendChild(buttonDelateSelected);
	ulElement.appendChild(li);
}

//DELATE CARD WITH DELATE BUTTON
const delateCard = (e) => {
	e.target.closest('li').remove();
}

//TOGGLE CARD AND SHOW OPTIONS CLICK ON THE CARD
function toggleCard(e){
	liCardSelected = e.target;
	spanSpanishSelected = liCardSelected.querySelectorAll('span')[0];
  spanItalianSelected = liCardSelected.querySelectorAll('span')[1];
  buttonDelateSelected = liCardSelected.querySelectorAll('button')[0];

	liCardSelected.classList.toggle('selected');
	spanSpanishSelected.classList.toggle('hidden');
	spanItalianSelected.classList.toggle('hidden');
	buttonDelateSelected.classList.toggle('hidden');
}

///////////////////////////////////
//LISTENERS
levelSelector.addEventListener('change', selectLevel)
startButton.addEventListener("click", createWordList);
	