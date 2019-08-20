import filter from './filter'

//Работа с каталогом
export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogWrapper = document.querySelector('.catalog');
    const catalogBtn = document.querySelector('.catalog-button');
    const categories = new Set();
    const filterTitle = document.querySelector('.filter-title h5');
    
    cards.forEach((card) => {
        console.dir(card);
        categories.add(card.dataset.category);
    });

    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const allLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = ''; 
        } else {
            catalogWrapper.style.display = 'block';
        }
        
        if (event.target.tagName === 'LI'){

            allLi.forEach((elem) => {
                if (elem === event.target) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            });
            filterTitle.textContent = event.target.textContent;
            filter();
        }
    });
}