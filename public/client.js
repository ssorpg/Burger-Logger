$('.newBurger').submit(event => {
    event.preventDefault();

    const self = $(event.target);

    $.ajax('/api/burgers', {
        method: 'POST',
        data: self.serialize()
    });
});

$('.eatBurger').on('click', event => {
    const id = $(event.target).data('id');

    $.ajax('/api/burgers/' + id, {
        method: 'DELETE'
    });
});