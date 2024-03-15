import { NavLink } from 'react-router-dom';


const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return (
    <nav>
        <h1>Galleries</h1>
        <NavLink to={`/`}>Home</NavLink>
        
        {Object.values(galleries).map((ele, idx) => (
            <NavLink to={`/galleries/${idx}`} key={ele.id}>
                <ul>{ele.name}</ul>
            </NavLink>
        ))}
        
    </nav>
    );
};


export default GalleryNavigation;