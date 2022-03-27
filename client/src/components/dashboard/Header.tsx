


import React, { useContext, useRef } from 'react';
import { DataContext } from '../../context/MainContext';
import '../../css/dashboard_header.css';

export default function Header(){
  const dataContext = useContext(DataContext);
  const searchRef = useRef<HTMLInputElement>(null);

  const headerStyle = {
    border: dataContext.theme.title === 'light' ? '1px solid black' : ''
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchItem = searchRef.current?.value;
    dataContext.search(searchItem);
    event.currentTarget.reset();
  }
  
  return (
    <React.Fragment>
    <header className={`navbar navbar-dark ${dataContext.theme.background} flex-md-nowrap p-0 shadow`} 
            style={headerStyle}>
		<p className={`navbar-brand col-md-4 col-lg-3 me-0 px-3 m-0 py-2 text-white bg-dark`} 
       style={headerStyle}>inScript Connect
    </p>
		<button className="navbar-toggler position-absolute d-md-none collapsed" 
						type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#sidebarMenu" 
						aria-controls="sidebarMenu" 
						aria-expanded="false"
            style={{color: `${dataContext.theme.reverse}`}} 
						aria-label="Toggle navigation">
      <i className="fas fa-bars" ></i>
    </button>
    <form className='w-100 d-none d-md-block d-lg-block' onSubmit={handleSubmit}>
    <input className="form-control form-control-dark" 
					 type="text" 
					 placeholder="Search" 
           ref={searchRef}
           required
					 aria-label="Search" />
    </form>
    <div className="navbar navbar-expand-lg p-0 m-0 col-12 col-md-auto col-lg-auto">
      <div className={`nav-item text-nowrap dropdown ${window.innerWidth >= 767 ? 'dropstart' : ''}`} 
           id="navbarNavDarkDropdown">
        <button className={`btn nav-link px-3 dropdown-toggle ${dataContext.theme.text}`}
                data-bs-toggle="dropdown"
                id="navbarDarkDropdownMenuLink"
                aria-expanded="false"
                style={{color: `${dataContext.theme.reverse}`}}>
          <i className='fas fa-user'/>
        </button>
        <ul className={`dropdown-menu ${dataContext.theme.title === 'dark' ? 'dropdown-menu-dark' : ''}`} 
            aria-labelledby="navbarDarkDropdownMenuLink">
          <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#settingsModal">Settings</button></li>
          <li className='px-3'>
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              <input className="form-check-input" 
                     type="checkbox" 
                     role="switch" 
                     checked={!dataContext.isLight}
                     id="flexSwitchCheckDefault" 
                     onChange={() => dataContext.changeTheme()} />
            </div>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li><button className="btn dropdown-item text-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</button></li>
        </ul>
      </div>
    </div>
		</header>
    
    </React.Fragment>
  )
}