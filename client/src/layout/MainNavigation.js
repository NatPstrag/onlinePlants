import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return(
        <header>
         
            <nav>
                <ul>
                
                        <Link to='/'>Home page</Link>
                        <Link to='/products/:id'>product detail</Link>
                        <Link to='/products/:id/update'>update page</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/admin'>update page</Link>
                  
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;