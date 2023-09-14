
//Initial state
export const defaultProduct = {
    count: 1,
    discount: 0,
    name: 'Bananas',
    price: 2.99
  }
  
   //Reducer function
   //state refers to the current state
   //action - {type: "ACTION_NAME", payload: "some value"}
   export function productReducer(state, action) {
    switch (action.type) {
        case "PLUS_COUNT":{
            //make a copy of the state becos state is immutatble
            const newState = {...state};
           
            newState.count = state.count + 1;    //increment count

            if(newState.count >- 5)             //Apply discount 20 if count >= 5
                newState.discount = 20;

                return newState;                //return state

            break;
        }

        default:
            throw new Error('No action type found', action.type);
      }

   }

