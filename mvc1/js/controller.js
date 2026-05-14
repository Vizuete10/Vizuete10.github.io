// controller.js
const Controller = {
    init() {
        this.bindEvents();
        this.updateView();
    },
    bindEvents() {
        $('#add-item-button').on('click', function ()  {
            const newItem=$('#item-input').val();

            if (newItem) {
                Model.addItem(newItem);
                Controller.updateView();
            }
        });
        $('#ol-item-list').on('click', '.delete-btn', function() {
            const id = $(this).data('id');
            Model.deleteItem(id);
            Controller.updateView();
        });
    },
    updateView() {
        const items = Model.getItems();
        View.render(items);
    },
};
