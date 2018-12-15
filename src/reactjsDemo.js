import React, { Component } from 'react';
import { createStore } from 'redux';



class ReduxDemo extends Component {
    render() {

        //step2: Reducer: state n action
        const reducer = function (state, action) {
            if (action.type === "ATTACK") {
                return action.payload;
            } else if (action.type === 'GREENATTACK') {
                return action.payload;
            }
            return state;
        }

        // Step1 Store: reducer n sate

        const store = createStore(reducer, "peace");




        //step3: Subscribe

        store.subscribe(() => {
            console.log("Store is Now", store.getState());
        })

        store.dispatch({ type: "ATTACK", payload: "Iron man" })
        store.dispatch({ type: "GREENATTACK", payload: "HULK" })
        return (
            <div>
                Hey Redux
           </div>
        )
    }
}

export default ReduxDemo;