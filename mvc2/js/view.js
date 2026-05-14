// view.js
const View = {
    render(personas) {
        const $tbody = $('#tbody');
        $tbody.empty();
        personas.forEach((persona, indice) => {
            $tbody.append(this.generaTr(persona, indice));
        });
    },
    generaTr(persona, indice) {
        return `<tr id="fila-${persona.id}" data-indice="${indice}" onclick="Controller.eliminarFila(this)">
                    <td>${persona.nombre}</td>
                    <td>${persona.apellidos}</td>
                    <td>${persona.edad}</td>
                    <td>${persona.ciudad}</td>
                </tr>`;
    },
    mostrarEstadisticas(estadisticas) {
        const $stats = $('#estadisticas');
        if (!estadisticas) {
            $stats.text('');
            return;
        }
        $stats.text(
            `Suma = ${estadisticas.suma}   Media = ${estadisticas.media}   Máximo = ${estadisticas.max}   Mínimo = ${estadisticas.min}`
        );
    },
    limpiarFormulario() {
        $('#nombre, #apellidos, #edad, #ciudad').val('');
    }
};