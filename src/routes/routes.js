import Navbar from "../containers/frontend/Navbar"
import Signin from "../containers/auth/Signin"
import User from "../containers/admin/User"


const routes = [
    //Sign in
    {path:'/signin', exact: true, name:'Signin', component: Signin},
    //Navbar
    {path:'/navbar', exact: true, name:'Navbar', component: Navbar},
    //User
    {path:'/user', exact: true, name:'User', component: User},

]

export default routes