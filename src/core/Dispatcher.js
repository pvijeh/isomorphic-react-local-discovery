/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

// need to as sources for payload constants which are currently commented out
// var PayloadSources = Constants.PayloadSources;

AppDispatcher.handleViewAction = function (action) {
    
    var payload = {
        // source: PayloadSources.VIEW_ACTION,
        source: action.actionType,
        action: action.content
    };
    this.dispatch(payload);
};

AppDispatcher.handleServerAction = function (action) {
    
    var payload = {
        // source: PayloadSources.SERVER_ACTION,
        source: action.actionType,
        action: action.content
    };
    this.dispatch(payload);
};

export default AppDispatcher;
