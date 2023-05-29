import React from "react";
import Settings from "./Settings";

const Header: React.FC = () => {
  const [openSettingsMenu] = React.useState<boolean>(false);

  return (
    <header>
      <div className="wrapper displayContainer">
        <div className="header__text">
          <h1>Welcome User</h1>
        </div>
        <div className="header__buttons">
          <h2>
            <span>Logout </span>
          </h2>
          {openSettingsMenu && <Settings />}
        </div>
      </div>
    </header>
  );
};

export default Header;
