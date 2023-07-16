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
                        <Link to="/category/pakistan">Pakistan</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/international">International</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/business">Business</Link>
                    </div>
                    <div className="nav_item item_border">
                        <Link to="/category/sports">Sports</Link>
                    </div>
                    <div className="nav_item  item_border">
                        <Link to="/category/science">Science</Link>
                    </div>
                    <div className="nav_item  item_border">
                        <Link to="/category/technology">Technology</Link>
                    </div>
                    <div className="nav_item">
                        <Link to="/category/health">Health</Link>
                    </div>


                </div>
            </nav>
        </>

    )
}
export default Header;