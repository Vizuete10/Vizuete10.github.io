const Controller = {
    init() {
        this.bindEvents();
        this.updateView();
    },
    bindEvents() {
        window.principal = () => {
            this.insertarPersona();
        };
    },
    insertarPersona() {

        const nombre = $('#nombre').val();
        const apellidos = $('#apellidos').val();
        const edad = $('#edad').val();
        const ciudad = $('#ciudad').val();


        if (nombre === '' || apellidos === '' || edad === '' || ciudad === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        Model.addPersona(nombre, apellidos, edad, ciudad);

        this.updateView();

        View.limpiarFormulario();
    },
    updateView() {
        const personas = Model.getPersonas();
        View.render(personas);
        const estadisticas = Model.getEstadisticas();
        View.mostrarEstadisticas(estadisticas);
    },
    eliminarFila(tr) {
        const indice = parseInt($(tr).attr('data-indice'));
        Model.deletePersona(indice);
        this.updateView();
    }
};