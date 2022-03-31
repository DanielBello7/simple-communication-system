


import { useContext } from 'react';
import ContactScreen from "../components/dashboard/ContactScreen";
import ComponentLoader from "../components/ComponentLoader";
import { DataContext } from '../context/MainContext';

export default function ContactCanvas() {
  const { theme, infoLoading } = useContext(DataContext);
  return (
    <div className={`offcanvas offcanvas-end shadow-lg ${theme.background}`} 
         tabIndex={-1} 
         id="offcanvasRight" 
         aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
        <p id="offcanvasRightLabel"></p>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
    { infoLoading ? <ComponentLoader /> : <ContactScreen /> }
    </div>
    </div>
  )
}