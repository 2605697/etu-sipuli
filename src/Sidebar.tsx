import { useState } from "react"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import LoginButton from "./LoginButton"

function Sidebar() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="position-absolute top-0 end-0 p-3 d-flex align-items-center gap-2" style={{ zIndex: 1000 }}>
        <LoginButton />
        <Button
          variant="light"
          className="rounded-circle p-2 lh-1 fs-4"
          onClick={() => setShow(true)}
        >
          <i className="bi bi-list" />
        </Button>
      </div>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Places</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
