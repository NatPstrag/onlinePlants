import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return(
        <header className={classes.header}>
         <div className={classes.logo}>
              <h1 className="front-weight-light display-1 text-center">
                Plants are friends!
            </h1>
             </div>
            <nav>
                <ul>
                
                        <Link to='/'>Home page</Link>
                        <Link to='/products/:id'>product detail</Link>
                        <Link to='/products/:id/update'>update page</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/admin'>Admin</Link>
                        
                  
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;