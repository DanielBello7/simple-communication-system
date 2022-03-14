


export default function LoadingScreen() {
  return <div className="bg-dark bg-opacity-25 d-flex justify-content-center align-items-center position-fixed w-100 h-100 top-0 bottom-0 overflow-hidden">
    <div className="spinner-border text-white" role="status" style={{width: "4rem", height: "4rem"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
}