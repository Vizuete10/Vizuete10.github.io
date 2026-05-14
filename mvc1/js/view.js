// view.js
const View = {
    render(items) {
        const $list = $('#ol-item-list');
        $list.empty(); // Limpia la lista
        items.forEach((item, id) => {
            $list.append(`<li>${item} <button class="delete-btn" data-id="${id}">Eliminar</button></li>`);
        });
    },
};
