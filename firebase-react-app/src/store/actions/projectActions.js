export const createProject = (project)=>{
  return (dispatch,getState,{getFirebase,getFirestore})=>{
  //ASync Actions
const profile = getState().firebase.profile;
const authorId  = getState().firebase.auth.uid
 const firestore = getFirestore();
 firestore.collection('projects').add({...project,
    authorFirstName:profile.firstName,
    authorLastName:profile.lastName,
    authorId,
    createdAt:new Date()
})
.then(res=>{
    console.log(res)
    dispatch({
        type:'ADD_PROJECT',
        project
    })
})
.catch(err=>{
    dispatch({
        type:'ADD_PROJECT_ERROR',
        err
    })
    alert(err);
})  
  }
}