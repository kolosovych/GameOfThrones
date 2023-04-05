const apiUrl = 'https://thronesapi.com/api/v2/Characters';

const showAllBtn = document.getElementById('showAllBtn');
const charactersList = document.getElementById('characters');
const characterDetailsDiv = document.getElementById('characterDetails');

showAllBtn.addEventListener('click', () => {
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			charactersList.innerHTML = '';
			characterDetailsDiv.innerHTML = '';
			data.forEach(character => {
				const li = document.createElement('li');
				li.innerText = character.fullName;
				charactersList.appendChild(li);
				li.addEventListener('click', () => {
					characterDetailsDiv.innerHTML = '';
					const h2 = document.createElement('h2');
					h2.innerText = character.title;
					characterDetailsDiv.appendChild(h2);
					const img = document.createElement('img');
					img.src = character.imageUrl;
					characterDetailsDiv.appendChild(img);
				});
			});
		});
});
