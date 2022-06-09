import axios from "axios";
class VehicleMakeService { 
    getMakes = () => {
        var makes = [{id: 1, name: "ford"},{id: 2, name: "bmw"},{id: 3, name: "vw"}];
        console.log(makes);
        return makes;
    }

    getTodos = async () => {
        var todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(todos);
        return todos;
    }
    createTodo = async () => {
        await axios.post("https://jsonplaceholder.typicode.com/todos");
    }
}
export default VehicleMakeService;