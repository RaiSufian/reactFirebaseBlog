import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className="logo_section">
                <Link to="/">
                    <h1 className="py-3">INGA NEWS</h1>
                </Link>

            </div>
            <nav className="nav_bar">
                <div className="nav_menu">
                    <div className="nav_item item_border">
                        <Link to="/category/Pakistan">Pakistan</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/International">International</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/Business">Business</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/Sports">Sports</Link>
                    </div>
                    <div className="nav_item  item_border">
                        <Link to="/category/Science">Science</Link>
                    </div>
                    <div className="nav_item  item_border">
                        <Link to="/category/Technology">Technology</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/category/Health">Health</Link>
                    </div>


                </div>
            </nav>
        </>

    )
}
export default Header;