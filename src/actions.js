export const REQUEST_API_DATA="REQUEST_API_DATA";
export const RECEIVE_API_DATA="RECEIVE_API_DATA";
export const ERROR_API_DATA="ERROR_API_DATA";



export const requestApiData=()=> ({type:REQUEST_API_DATA});
export const receiveApiData=data=> ({type:RECEIVE_API_DATA,payload:data});
export const reeorApiData=()=>({type:ERROR_API_DATA});
