import { FORM_EMAIL } from "./actions";

const initialState = {
  email: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case FORM_EMAIL:
      return {...state, email: [...state.email, actions.payload]}

    default:
      return state;
  }
}
