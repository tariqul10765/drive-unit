import { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [isLodding, setIsLodding] = useState(true);

    const auth = getAuth();

    const createUser = (history, location, userName, email, password) => {
        setIsLodding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;

                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {
                    saveUser(user.email, user.displayName);
                    history.push(location);
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });
            })
            .catch((error) => {
                const errorCode = error.code;
            });
    }

    const signInUser = (redirect_url, history, email, password) => {
        setIsLodding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorCode = error.code;
            });
    }

    const userSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log('An error happened.');
        });
    }

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/user/get-user-by-email/${user.email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.data?.admin))
    }, [user.email])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                console.log('User is signed out');
            }
            setIsLodding(false);
        });
    }, [auth]);

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        const url = `${process.env.REACT_APP_API_BASE_URL}/user/add-user`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    // const updateUser = (email, displayName) => {
    //     const user = { email, displayName };
    //     const url = `${process.env.REACT_APP_API_BASE_URL}/user/`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    // }


    return {
        user,
        admin,
        isLodding,
        createUser,
        signInUser,
        userSignOut,
    }

}

export default useFirebase;