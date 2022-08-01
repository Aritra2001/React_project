const Navbar = () => {
    return ( 
    <div className="header">
        <nav className="navbar">
            <h1>The Blog spot</h1>
            <div className="links">
            <ul>
               <li><a href="/">Home</a></li>
                <li><a href="/create">New Blog</a></li>
            </ul>
            </div>
        </nav>
    </div>
     );
}
 
export default Navbar;