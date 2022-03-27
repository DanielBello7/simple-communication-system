


import { useContext } from "react";
import { DataContext } from "../context/MainContext";

export default function SettingsModal() {
  const { theme } = useContext(DataContext);

  const handleChange = (): void => {}

  return (
    <div className="modal fade text-dark" id="settingsModal"
         tabIndex={-1}
         data-bs-backdrop="static"
         aria-labelledby="settingsModal"
         aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className={`modal-header ${theme.title==='dark'?'text-white bg-primary':''}`}>
      <h3 className="modal-title" id="settingsModalTitle">Settings</h3>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
      <form className="w-100" id="userSettingsForm">
        
        <div className="mb-0 form-check form-switch form-control-lg">
        <input className="form-check-input" 
               type="checkbox" 
               role="switch"
               id="flexSwitchCheckChecked1" 
               onChange={handleChange}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked1">Dark mode</label>
        </div>
        <p className="text-muted p-0 mb-4" style={{fontSize: '0.7rem'}}>Toggle between the light mode and the dark mode</p>


        <div className="mb-0 form-check form-switch form-control-lg">
        <input className="form-check-input" 
               type="checkbox" 
               role="switch"
               id="flexSwitchCheckChecked2" 
               onChange={handleChange}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked2">Save messages online</label>
        </div>
        <p className="text-muted p-0 mb-4" style={{fontSize: '0.7rem'}}>This would enable your messages be saved on our servers</p>


        <div className="mb-0 form-check form-switch form-control-lg">
        <input className="form-check-input" 
               type="checkbox" 
               role="switch"
               id="flexSwitchCheckChecked3" 
               onChange={handleChange}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked3">Private mode</label>
        </div>
        <p className="text-muted p-0 mb-4" style={{fontSize: '0.7rem'}}>Enabling this would prevent others from knowing your online status</p>


      </form>
      </div>
      
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
    </div>
    </div>
  )
}