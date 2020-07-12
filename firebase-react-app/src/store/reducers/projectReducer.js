
const initState = {
    projects:[
        {
            id:1,title:"1sr",content:"jfiejf"
        },
        {
            id:2,title:"1sr",content:"jfiejf"
        },
        {
            id:3,title:"1sr",content:"jfiejf"
        }
    ]
};
const projectReducer = (state = initState,action)=>{
    console.log("proeect reducer",action)
    switch(action.type){
       case 'ADD_PROJECT':
           console.log("project created",action.project)
        case 'ADD_PROJECT_ERROR' :
        console.log("eror received",action.err);
        default:
            return state
    }
}

export default projectReducer