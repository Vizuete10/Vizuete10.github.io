class TareaModel {
    lista =[];


    // Create
    insertTarea(id, tareaEntity){
        this.lista.push(tareaEntity);

    }

    // Update

    updateTarea(id, tareaEntity){
        let pos = this.#buscarTarea(id);
        if(pos !== null){
            lista[pos] = tareaEntity;
            return false;
        }
        lista[pos]=tareaEntity;
        return true;
    }
    // Read
    getTareaById(id){
        return this.lista.find(tarea => tarea.id === id) ?? null;
    }

    getAllTarea(){
        return this.lista;
    }

    // Delete
    deleteTarea(id){
        let pos = this.#buscarTarea(id);
        if(pos !== null){
            lista.splice(pos,1);
            return true;
        }
        return false;
    }

    #buscarTarea(id){
        let c = 0;
        do{
            var tareaEntity = lista[c];
            c++;
        }while(tareaEntity.id === id && c<lista.length);
        if(c == lista.length){
            return null;

        }
        return c - 1;
    }
}
