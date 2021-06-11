import "./topbar.scss";
import { Person, Mail, ShoppingCart } from "@material-ui/icons";

function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="angels">Codex.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+254 714 79 6130</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>angelscodex101@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                <div className="itemContainer">
                <ShoppingCart className="shopping" />
                
                 </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
