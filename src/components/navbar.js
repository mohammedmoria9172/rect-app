import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// if we are not using 'states' in our components then we can make it to functional based components(which is stateless component)

const Navbar = ({ ninjas, deleteNinja }) => {
    //const { ninjas } = props; //destructuring 
    const ninjasList = ninjas.map(ninjas => {
        if (ninjas.age >= 24) {
            return (
                <div key={ninjas.id}>
                    <ul>
                        <li>{ninjas.name}</li>
                        <li>{ninjas.age}</li>
                        {/* <button onClick={deleteNinja(ninjas.id)}>delete</button> in this case onclick function is invoking automatically bcz we have put brakets after there name solution is down below*/}
                        <button onClick={() => { deleteNinja(ninjas.id) }}>delete</button>
                    </ul>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className="nav-bar">
            {ninjasList}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default withRouter(Navbar)