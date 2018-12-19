class HashStorage{
    constructor(){

    }
    addValue(key,value){
        this[key] = value;
    };
    getValue(key){
        return this[key];
    };
    deleteValue(key){
        if(!!this[key]){
            delete this[key];
            return true;
        }
        return false;
    };
    getKeys(){
        return Object.keys(this);
    }
}