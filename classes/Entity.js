//An id in an entity is used to attach components to an object

class Entity{
    constructor(id, registry){
        this.id = id;
        this.registry = registry;
        this.components = {}

    }
}

export default Entity;