$(document).ready(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        const newItemName = $('#shopping-list-entry').val();

        $('.shopping-list').append(`<li>
            <span class="shopping-item">`+ newItemName +`</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`);
   });

    $('ul').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });

    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest('li').remove();
    });
});