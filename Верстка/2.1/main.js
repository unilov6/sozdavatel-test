const catalog = document.querySelector('.catalog');
const gridBtn = document.querySelector('.grid');
const listBtn = document.querySelector('.list');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        
        data.forEach(product => {
            const item = document.createElement('div');
            item.className = 'item';

            item.innerHTML = `
                <h1>${product.title}</h1>
                <p>${product.price}</p>
                <button>Buy</button>
            `;

            catalog.appendChild(item);
        })
    })

gridBtn.addEventListener('click', () => {
    catalog.classList.add('grid-view');
    catalog.classList.remove('list-view');
    listBtn.classList.remove('active');
    gridBtn.classList.add('active');
})

listBtn.addEventListener('click', () => {
    catalog.classList.add('list-view');
    catalog.classList.remove('grid-view');
    gridBtn.classList.remove('active');
    listBtn.classList.add('active');
})