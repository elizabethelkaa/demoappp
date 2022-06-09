import { makeAutoObservable } from "mobx";
import { makeObservable } from "mobx";

class Ceate {
    constructor(){
        makeAutoObservable(this);
    }
    make = {
        name: "",
        abrv: ""
    }

    createMake() {
        
    }
}