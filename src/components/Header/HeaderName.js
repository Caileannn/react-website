import './HeaderName.css';
import { Link } from 'react-router-dom';

function HeaderName(){

    return(
        
        <div className='header-name'>
                <h1><Link to="/">cailean finn</Link></h1>
        </div>
        
    );
}

export default HeaderName;