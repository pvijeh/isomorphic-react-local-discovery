
import AppDispatcher from '../core/Dispatcher'; 

// this should be changed to ES6
var AppActions = {
    receiveContent : function (content){
         AppDispatcher.handleServerAction({
          actionType: 'receive-content',
          content: content
        });
    },
    displayPopup : function (content){
         AppDispatcher.handleViewAction({
          actionType: 'display-popup',
          content: content
        });
    }
};

export default AppActions;