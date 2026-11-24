import { useState } from "react"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Offcanvas from "react-bootstrap/Offcanvas"
import LoginButton from "./LoginButton"
import { usePlaces } from "./usePlaces"

function Sidebar() {
  const { places, selectedPlace, selectPlace } = usePlaces()
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
        <Offcanvas.Header className="p-3">
          <Offcanvas.Title>Places</Offcanvas.Title>
          <Button
            variant="light"
            className="rounded-circle p-2 lh-1 fs-4 ms-auto"
            onClick={() => setShow(false)}
          >
            <i className="bi bi-x-lg" />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3 overflow-hidden">
          <div className="flex-grow-1 overflow-auto">
            <Table striped hover className="mb-0 user-select-none">
              <thead className="sticky-top"><tr><th>Name</th></tr></thead>
              <tbody>
                {places.map(p => (
                  <tr
                    key={p.ID}
                    className={selectedPlace?.ID == p.ID ? "table-active" : undefined}
                    onClick={() => selectPlace(p)}
                  >
                    <td>{p.Name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <hr className="m-0"/>
          <div className="flex-shrink-0">
              {selectedPlace ? (
                <>
                  <h3>{selectedPlace.Name}</h3>
                  <Table striped>
                  <tbody>
                  <tr><th>ID</th><td>{selectedPlace.ID}</td></tr>
                    <tr><th>User ID</th><td>{selectedPlace.UserID}</td></tr>
                    <tr><th>Latitude</th><td>{selectedPlace.Latitude.toFixed(5)}</td></tr>
                    <tr><th>Longitude</th><td>{selectedPlace.Longitude.toFixed(5)}</td></tr>
                  </tbody>
                  </Table>
                </>
              ) : (
              <p>Select a place.</p>
              )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
