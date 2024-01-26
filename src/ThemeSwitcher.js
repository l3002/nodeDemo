import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };

  const themeClass = theme ? theme.toLowerCase() : "secondary";
  return (
    <>
      <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
      >
        {`${theme || "Default"}`}
      </div>
      <div className="btn-group">
        <button className={`text-capitalize btn btn-${themeClass} btn-lg"`} type="button">
          {theme ? theme : "Choose Theme"}
        </button>
        <button
          type="button"
          className={`btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" onClick={() => setTheme("primary")}>
            Primary
          </a>
          <a className="dropdown-item" onClick={() => setTheme("danger")}>
            Danger
          </a>
          <a className="dropdown-item" onClick={() => setTheme("success")}>
            Success
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" onClick={() => resetTheme()}>
            Default
          </a>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
