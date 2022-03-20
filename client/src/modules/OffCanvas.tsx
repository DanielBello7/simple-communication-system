


import { useState } from 'react';
import ContactScreen from "../components/dashboard/ContactScreen";
import ComponentLoader from "../components/ComponentLoader";

export default function OffCanvas() {
  const [infoLoading, setInfoLoading] = useState(false);
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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