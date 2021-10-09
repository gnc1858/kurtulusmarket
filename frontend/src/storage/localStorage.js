
export function getState( ){

 try{
   const serialisedState=localStorage.getItem("state");
   if(serialisedState===null) return undefined;
   else {
     return JSON.parse(serialisedState)
   }

 }

 catch(e){
  console.error(e)
 }

}



export function saveState(state){

 try{
   const serialisedState=JSON.stringify(state)
   localStorage.setItem("Items", serialisedState)

 }
catch(e){

}
}