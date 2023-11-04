import "./style.css"

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
           <div className="navbar">
           <div>
            <h1>Embrance</h1>
            </div>
            <div className="nav-links">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
            </div>
            <div>
                <button>book a call</button>
            </div>
           </div>
        </div>
    )
}

export default Navbar;