import react, { useEffect } from "react";
import { observer, inject } from "mobx-react";
const VehicleMakePage = (props) => {

    useEffect(() => {
        props.makeStore.getTodos();
        props.makeStore.getMakes();
    }, [props.makeStore])

    return <div>
    {props.makeStore.todos.map(x => (
        <p key={x.id}>{x.title} <button onClick={() => makestore.delte(x.id)}>Delete</button></p>
        
    ))}
    {}
    </div>
}
export default inject("makeStore")(observer(VehicleMakePage));