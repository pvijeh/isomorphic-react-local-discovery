
import AppDispatcher from '../core/Dispatcher'; 
import EventEmitter from 'eventemitter3'; 
import assign from 'object-assign'; 

let _popupState = '';

class AppStoreProto extends EventEmitter {

    sendPopupState(){
        return _popupState; 
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback, context) {
        this.on('change', callback, context); 
    }

    removeChangeListener(callback, context) {
        this.removeListener('change', callback, context); 
    }

} 

const AppStore = new AppStoreProto();

AppStore.dispatchToken = AppDispatcher.register(function (payload) {

    switch(payload.source){
        
        case 'receive-content':
        _content = payload.action;
        break;

        case 'display-popup':
        _popupState = payload.action;
        console.log(_popupState); 
        AppStore.emitChange();
        break;

    }

});

export default AppStore; 

