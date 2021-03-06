// Exercise 1 - Get artist image

fetch('https://rest.bandsintown.com/artists/sting/?app_id=jshp')
	.then(function (res) {
		res.json().then(function (data) {
			console.log(data);

			var myImage = new Image(420, 420);
			myImage.src = data.image_url;
			const div = document.getElementById('exercise1').appendChild(myImage);
		});
	})
	.catch(function (err) {
		console.log('Error: ', err);
	});

//exercise 2 - Get artists events

fetch('https://rest.bandsintown.com/artists/sting/events?app_id=jshp')
	.then(res => {
		res.json().then(data => {
			const div = document.getElementById('exercise2');
			const rootElem = document.getElementById('exercise2');
			if (rootElem.childNodes.length) {
				const elem = document.getElementById('events');
				elem.parentNode.removeChild(elem);
			}
			const ul = document.createElement('ul');
			ul.setAttribute('id', 'events');
			data.map(elem => {
				const li = document.createElement('li');
				li.appendChild(document.createTextNode(elem.venue.name));
				ul.appendChild(li);
			});
			rootElem.appendChild(ul);
		});
	})
	.catch(err => {
		console.log('Error: ', err);
	});

//Excercise 3 - Make list where country = Germany

fetch('https://rest.bandsintown.com/artists/sting/events?app_id=jshp')
	.then(res => {
		res.json().then(data => {
			console.log(data);
			const div = document.getElementById('exercise3');
			const rootElem = document.getElementById('exercise3');
			if (rootElem.childNodes.length) {
				const elem = document.getElementById('events');
				elem.parentNode.removeChild(elem);
			}
			const ul = document.createElement('ul');
			ul.setAttribute('id', 'events');
			data.map(elem => {
				if (elem.venue.country === 'Germany') {
					const li = document.createElement('li');
					li.appendChild(document.createTextNode(elem.venue.name));
					ul.appendChild(li);
				}
			});
			rootElem.appendChild(ul);
		});
	})
	.catch(err => {
		console.log('Error: ', err);
	});

// Exercise 4 - Add buttons for interaction

// In the part1.js file, write a function changeColor that when invoked will first check if the body background color is rgb(221, 238, 255). You can refer to the index.css file to inspect the css, but do not edit the file.

// If the body background color is rgb(221,238,255) changeColor should change it to rgb(255,238,221). If it isn't, changeColor should change the color back to rgb(221,238,255).

// Add an event listener to button #1. IT has an id of "activate". On click, the button should log to the console 'clicked #1'. It should also set-up a click event listener on button #2 with ID of color. The listener should log to console 'clicked #2' and then call the changeColor function you just created.

var btn2 = document.getElementById('color');
btn2.addEventListener('click', changeColor, true);

function changeColor() {
	console.log('Clicked #2');
	let mainBackgroundColor = 'rgb(221, 238, 255)';
	let alternateBackgroundColor = 'rgb(255,238,221)';
	if (document.body.style.background = mainBackgroundColor) {
		document.body.style.background = alternateBackgroundColor;
	} else {
		document.body.style.background = mainBackgroundColor;
	}
}

var btn1 = document.getElementById('activate');
btn1.addEventListener('click', logOut, true);

function logOut() {
	console.log('Clicked #1');
	changeColor(); //will console.log 'Clicked #2'
}