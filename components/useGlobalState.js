import { useState, useEffect } from 'react';


export function useGlobalState(globalState) {
    const [, reRender] = useState();
    const state = globalState.getValue();

    // function reRender(newState) {
    //     // This will be called when the global state changes
    //     setState({});
    // }

    useEffect(() => {
        // Subscribe to a global state when a component mounts
        globalState.subscribe(reRender);

        return () => {
            // Unsubscribe from a global state when a component unmounts
            globalState.unsubscribe(reRender);
        }
    },[globalState])

    function setState(newState) {
        // Send update request to the global state and let it 
        // update itself
        globalState.setValue(newState);
    }

    return [state, setState];
}