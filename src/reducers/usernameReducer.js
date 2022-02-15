export const usernameActionTypes = {
    SET_DEFAULT_USERNAME: 'SET_DEFAULT_USERNAME',
    CLEAR_USERNAME: 'CLEAR_USERNAME'
};

const initialState = '';

export const usernameReducer = (state = initialState, action) => {
    switch (action.type) {
        case usernameActionTypes.SET_DEFAULT_USERNAME:
            return action.value;
        case usernameActionTypes.CLEAR_USERNAME:
            return '';
        default:
            return state;
    }
};

// action
export const setDefaultUsername = () => ({
    type: usernameActionTypes.SET_DEFAULT_USERNAME,
    value: 'Sasha'
});

export const clearUsername = () => ({
    type: usernameActionTypes.CLEAR_USERNAME
})