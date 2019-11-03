let items_count = document.querySelector('.items_count');
let click_item_content = document.querySelectorAll('.click_item_content');


click_item_content.forEach(function (click_item_content_function) {
    click_item_content_function.addEventListener('click', function () {
        this.classList.toggle('selected');

        let click_item_content_selected = document.querySelectorAll('.click_item_content.selected');

        items_count.innerHTML = click_item_content_selected.length;
    });
});