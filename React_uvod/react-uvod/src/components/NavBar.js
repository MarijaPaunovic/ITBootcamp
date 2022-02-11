import React, { Component } from 'react';

// class NavBar extends Component {
//     state = {}
//     render() {
//         return (
//             <div>
//                 <h2>Navbar</h2>
//                 <p>Ukupan broj naseg niza je: {this.props.totalCounters}</p>
//             </div>
//         );
//     }
// }
// export default NavBar;


// Stateless functional component
// destructuring props
const NavBar = ({ totalCounters }) => {
    return (
        <div>
            <h2>Navbar</h2>
            <p>Ukupan broj naseg niza je: {totalCounters}</p>
        </div>
    );
}
export default NavBar;