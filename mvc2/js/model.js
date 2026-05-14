// model.js
const Model = {
    data: {
        personas: [],
        contadorId: 0
    },
    addPersona(nombre, apellidos, edad, ciudad) {
        this.data.contadorId++;
        const persona = {
            id: this.data.contadorId,
            nombre: nombre,
            apellidos: apellidos,
            edad: parseInt(edad),
            ciudad: ciudad
        };
        this.data.personas.push(persona);
    },
    getPersonas() {
        return this.data.personas;
    },
    deletePersona(indice) {
        this.data.personas.splice(indice, 1);
    },
    getEstadisticas() {
        if (this.data.personas.length === 0) {
            return null;
        }
        const edades = this.data.personas.map(p => p.edad);
        const suma = edades.reduce((acc, val) => acc + val, 0);
        const media = suma / edades.length;
        const max = Math.max(...edades);
        const min = Math.min(...edades);

        return {
            suma: suma,
            media: media.toFixed(1),
            max: max,
            min: min
        };
    }
};