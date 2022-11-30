export const LOGIN='authActionTypes/LOGIN'
export interface LoginAction{
    type:typeof LOGIN,
    data:{username:string,
        password:string}
        
    
  
}