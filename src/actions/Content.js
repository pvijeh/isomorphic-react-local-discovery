
import AppDispatcher from '../core/Dispatcher'; 
import WebAPIUtils from '../core/WebAPIUtils'; 

// this should be changed to ES6
var AppActions = {

    doThing : function (){
    
         AppDispatcher.dispatch({
          actionType: 'log from the store',
          text: 'log from the store'
        });
    
    }

};


export default AppActions;