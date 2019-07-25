$(document).ready(function () {
    $('.newBurger').submit(event => {
        event.preventDefault();

        $.ajax('/api/burgers', {
            method: 'POST',
            data: $(event.target).serialize()
        })
            .then((res) => {
                const newLi = $('<li>') // TODO: client Handlebars
                    .html(`
                    <button data-id=${res.id} class="eatBurger">Eat</button>
                    ${res.burger_name}
                `)
                    .addClass('mb-2');

                $('.uneatenDisplay').append(newLi);
            });
    });

    $('.uneatenDisplay').on('click', '.eatBurger', event => {
        const id = $(event.target).data('id');

        $.ajax('/api/burgers/' + id, {
            method: 'PUT'
        })
            .then(() => {
                location.reload(); // TODO: get burgers without reloading
            });
    });
});