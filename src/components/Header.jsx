import {LOGO_URL} from '../utilities/constants'
export const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="food-app-logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header