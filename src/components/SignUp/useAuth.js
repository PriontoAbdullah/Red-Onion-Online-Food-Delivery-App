import React, { useState, useEffect, createContext, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = props => {

    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signup",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


const Auth = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const currUser = user;
                setUser(currUser);
            }
        })

    }, [])

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })

    }

    const signIn = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                window.history.back();
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })
    }

    const signUp = (email, password, name) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        setUser(result.user);
                        window.history.back();
                    })
            })
            .catch(error => {
                setUser(null);
                return error.message;
            })
    }

    const signOut = () => {
        return firebase.auth().signOut()
            .then(result => {
                setUser(null);
                return true;
            })
            .catch(error => {
                console.log(error);
                return error.message;
            })
    }

    return {
        user,
        signIn,
        signUp,
        signOut,
        signInWithGoogle
    }
}

export default Auth;