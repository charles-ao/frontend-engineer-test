import { GiHamburgerMenu } from "react-icons/gi";

const  Navbar = () => {
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <GiHamburgerMenu size='32px'/>
                </div>
                <div className='logo'>
                    <h1>samasys</h1>
                    <p>combat salary fraud</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar