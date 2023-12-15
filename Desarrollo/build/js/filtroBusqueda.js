function filtroBusqueda(input, selector, selectElement) {
    const d = document;

    d.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.target.matches(input)) {
            const searchText = e.target.value.toLowerCase();

            d.querySelectorAll(selector).forEach((el) => {
                const cardContent = el.querySelector('.card__content');
                const textContent = cardContent.textContent.toLowerCase();

                textContent.includes(searchText)
                    ? el.classList.remove('filter')
                    : el.classList.add('filter');
            });
        }
    });

   
}

const selectElement = document.querySelector('.form__select');
filtroBusqueda('#filtroNombre', '.card', selectElement);
