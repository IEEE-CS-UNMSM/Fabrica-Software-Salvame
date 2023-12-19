function filtroBusqueda(input, selector, selectElement) {
    const d = document;

    // Función para eliminar tildes
    function quitarTildes(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    d.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.target.matches(input)) {
            const searchText = quitarTildes(e.target.value.toLowerCase());

            d.querySelectorAll(selector).forEach((el) => {
                const cardContent = el.querySelector('.card__content');
                const textContent = quitarTildes(cardContent.textContent.toLowerCase());

                textContent.includes(searchText)
                    ? el.classList.remove('filter')
                    : el.classList.add('filter');
            });
        }
    });
}


const selectElement = document.querySelector('.form__select');
filtroBusqueda('#filtroNombre', '.card', selectElement);


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sortSelect').onchange = function () {
        sortCards(this.value);
        console.log(sortCards(this.value));
    };

    function sortCards(sortBy) {
        const cardsContainer = document.querySelector('.informe__grid');
        const cards = Array.from(cardsContainer.getElementsByClassName('card'));
        console.log('cardContainer');
        console.log(cardsContainer);
        console.log('cards');
        console.log(cards);

        cards.sort((a, b) => {
            const aValue = a.querySelector(`.${sortBy}`).textContent.toLowerCase();
            const bValue = b.querySelector(`.${sortBy}`).textContent.toLowerCase();
            console.log(aValue.localeCompare(bValue));
            return aValue.localeCompare(bValue);

        });

        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }

        cards.forEach(card => {
            cardsContainer.appendChild(card);
        });
    }
});