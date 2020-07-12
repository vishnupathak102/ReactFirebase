import { firestore } from "firebase";

export  const SignIn = (credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        console.log("ceweeeeeeeeeeeeeeeee")
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(res=>{
            dispatch({
                type:'LOGIN_SUCCESS',
            })
        }).catch(err=>{
            console.log("dipscatchcccccccc")
            dispatch({type:"LOGIN_FAILED"})
        })
    }
}



export  const signOut = (credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(res=>{
            dispatch({
                type:'SIGNOUT_SUCCESS',
            })
        }).catch(err=>{
            console.log("dipscatchcccccccc")
            dispatch({type:"LOGIN_FAILED"})
        })
    }
}



export  const signUp = (credentials)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        // firebase.auth().signOut()
        .then(res=>{
            console.log(res,"response   ")
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:credentials.firstName,
                lastName:credentials.lastName,
                initials:credentials.firstName[0] + credentials.lastName[0],
                email:credentials.email
            })
        }).then(res=>{
            dispatch({type:"SIGNUP_SUCCESS"});
        })
        .catch(err=>{
            console.log(err,"dipscatchcccccccc")
            dispatch({type:"SIGNUP_ERROR",err})
        })
    }
}