import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    });

    const changeAvatar = url => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeUser = userName => {
        setUser(prevState => ({...prevState, name: userName || prevState.name}));

    }

    const changeFollowers = newFollowers => {
        setStats(prevState => ({...prevState, followers: newFollowers || prevState.followers}))
    };

    const changeFollowing = newFollowing => {
        setStats(prevState => ({...prevState, following: newFollowing || prevState.following}))
    };


    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeUser, changeFollowing, changeFollowers
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App;
