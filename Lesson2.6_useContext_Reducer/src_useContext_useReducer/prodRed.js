// Initial state
export const initialProductState = {
  count: 1,
  discount: 0,
  name: "Bananas",
  price: 2.99,
};

// Reducer function
// state - refers the current state
// action -  { type: "ACTION_NAME", payload: "some value"} payload is optional
// action.type - tells you what to do
// action.payload - value that is provided to update something
export function productReducer(state, action) {
  switch (action.type) {
    // case "PLUS_COUNT": {
    //   const newCount = state.count + 1;
    //   return {
    //     ...state,
    //     count: newCount,
    //     discount: newCount >= 5 ? 20 : 0,
    //   };
    // }
    case "PLUS_COUNT": {
      // Make a copy of the state - Immutability
      const newState = { ...state };

      // Increment count
      newState.count = state.count + 1;

      // Apply discount if count >= 5
      if (newState.count >= 5) {
        newState.discount = 20;
      }

      // Apply discount if qty < 5,
      // give rebate when qty > 10

      // return updated state
      return newState;
      // break;
    }
    case "MINUS_COUNT": {
      // guard clause - guard against negative count
      if (state.count <= 0) {
        return state;
      }

      const newState = { ...state };
      newState.count = state.count - 1;
      if (newState.count < 5) {
        newState.discount = 0;
      }
      return newState;
    }
    case "SET_NAME": {
      return {
        // spread original state
        ...state,
        // overwrite the key value pairs
        name: action.payload,
      };
    }
    case "SET_PRICE": {
      return {
        ...state,
        price: action.payload,
      };
    }
    // case "SET_NAME": {
    //   // Make a copy of the state
    //   const newState = { ...state };

    //   // Change the name
    //   newState.name = action.payload;

    //   // Return the updated state
    //   return newState;
    // }
    default:
      throw new Error("productReducer - unknown action", action.type);
  }
}
