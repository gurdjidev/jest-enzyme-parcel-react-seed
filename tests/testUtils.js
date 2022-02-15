import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootReducer } from "../src/reducers/rootReducer";
import { middlewares } from "../src/store/store";

export const findDataTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
};