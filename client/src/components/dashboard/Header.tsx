


import { useContext } from 'react';
import { DataContext } from '../../context/MainContext';
import '../../css/dashboard_header.css';

export default function Header(){
  const dataContext = useContext(DataContext);

  const headerStyle = {
    border: dataContext.theme.title === 'light' ? '1px solid black' : ''
  }

  const inputStyle = {
    border: dataContext.theme.title === 'light' ? '1px solid whitesmoke' : ''
  }
  
  return (
    <header className={`navbar navbar-dark ${dataContext.theme.background} flex-md-nowrap p-0 shadow`} 
            style={headerStyle}>
		<p className={`navbar-brand col-md-3 col-lg-2 me-0 px-3 m-0 text-white bg-dark`} 
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
    <input className="form-control form-control-dark" 
					 type="text" 
           style={inputStyle}
					 placeholder="Search" 
					 aria-label="Search" />
    <div className="navbar-nav">
      <div className="nav-item text-nowrap">
      <button className={`btn nav-link px-3 ${dataContext.theme.text}`}
         style={{color: `${dataContext.theme.reverse}`}}>
        <i className='fas fa-user'/>
      </button>
      </div>
    </div>
		</header>
  )
}