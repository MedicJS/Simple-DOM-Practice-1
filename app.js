//Change Color of H2 Section
const h2Color = document.querySelector('#h2Color');
const colorBtn = document.querySelector('#colorBtn');
const h2Change = document.querySelector('#h2Change');

colorBtn.addEventListener('click', function() {
	h2Change.style.color = h2Color.value;
})

//Change H2 Title Section
const headingChange = document.querySelector('#headingChange');
const titleBtn = document.querySelector('#titleBtn');
const textChange = document.querySelector('#textChange');

titleBtn.addEventListener('click', function() {
	headingChange.textContent =  textChange.value;
});

//Toggle IMG DOM
const duckImg = document.querySelector('#duckImg');
const imgBtn = document.querySelector('#toggleBtn');

imgBtn.addEventListener('click', function() {
	if (duckImg.style.display === 'none') {
		imgBtn.textContent = 'Hide Image';
		duckImg.style.display = 'inline-block';
	} else {
		imgBtn.textContent = 'Show Image';
		duckImg.style.display = 'none';
	}
});


//Add Item To List DOM
const addInput = document.querySelector('#addInput');
const addInputBtn = document.querySelector('#addInputBtn');
const removeBtn = document.querySelector('#remove');

addInputBtn.addEventListener('click', function() {
	let ul = document.querySelector('#addList');
	let p = document.createElement('p');
	p.textContent = addInput.value;
	ul.appendChild(p);
	addInput.value = '';
})

removeBtn.addEventListener('click', function() {
	let ul = document.querySelector('#addList');
	let p = document.querySelector('p:last-child');
	ul.removeChild(p);
})


















