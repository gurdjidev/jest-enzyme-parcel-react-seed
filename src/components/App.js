import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUsername, setDefaultUsername } from '../reducers/usernameReducer';

import './App.scss';

export const App = () => {
    const username = useSelector(state => state.username);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDefaultUsername());
    }, []);

    return (
        <div 
            className="app-component" 
            data-test="app-component"
        >
            <h2>React TDD - Jest, Enzyme, Parcel!</h2>
            <p>username is: { username || 'none...' }</p>
            <hr />
            <div>
                <button
                    disabled={username.length === 0}
                    onClick={() => dispatch(clearUsername())}
                >clear username</button>{" "}
                <button
                    disabled={username.length > 0}
                    onClick={() => dispatch(setDefaultUsername())}
                >set default username</button>
            </div>
        </div>
    )
}