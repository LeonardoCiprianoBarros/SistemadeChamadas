import {Routes, Route} from 'react-router-dom';

import SignIn from '../pages/signin';
import SignUp from '../pages/signUp';
import DashBoard from '../pages/DashBoard';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            
            <Route path='/register' element={<SignUp/>}/>

            <Route path='/Dashboard' element={<DashBoard/>}/>

        </Routes>
    )
}

export default RoutesApp;