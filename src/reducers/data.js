  
import { RECEIVE_API_DATA } from "../actions";
 const initialstate={

    list:[]
  }


export default (state = initialstate, action) => {

  switch (action.type) {

    case RECEIVE_API_DATA:
      
      return {...state,list:action.payload};
    default:
      return state;
  }
};