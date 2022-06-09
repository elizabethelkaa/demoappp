import { observable, action } from "mobx";
import { makeObservable } from "mobx";
import VehicleMakeService from "../services/VehicleMakeService";

class VehicleMakeStore  {
    vehicleMakeService;
constructor(){
    this.vehicleMakeService = new VehicleMakeService();
    makeObservable(this, {
        makes: observable,
        getMakes: action,
        todos: observable

    });
}
makes = [];
todos = [];

getMakes = () => {

this.makes = this.vehicleMakeService.getMakes();
console.log(this.makes);
}
getTodos = async () => {
    var {data} = await this.vehicleMakeService.getTodos();
    this.todos = data;

}

}
export default VehicleMakeStore;