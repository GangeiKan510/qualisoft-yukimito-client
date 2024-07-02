export default function AdminBookingCard(props) {
  const petOwners = props.petOwners;

  const getOwnerName = (petOwnerId) => {
    const owner = petOwners.find((owner) => owner.id === petOwnerId);
    return owner ? owner.name : 'Unknown';
  };

  const getOwnerAddress = (petOwnerId) => {
    const owner = petOwners.find((owner) => owner.id === petOwnerId);
    return owner ? owner.address : 'Unknown';
  };

  const getOwnerStatus = (petOwnerId) => {
    const owner = petOwners.find((owner) => owner.id === petOwnerId);
    return owner ? owner.status : 'Unknown';
  };

  return (
    <>
      <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3">
        <div className="py-3">
          <div className="card shadow">
            <div className="card-header">
              <b>Booking Details</b>
            </div>
            <div className="card-body">
              <h5 className="card-title">Client Name: {getOwnerName(props.petOwnerId)}<span> ({getOwnerStatus(props.petOwnerId)})</span></h5>
              <p>Client Address: {getOwnerAddress(props.petOwnerId)}</p>
              <p>Booking ID: YKMTBK{props.bookingId}</p>
              <p className="card-text text-secondary">
                Service Availed: {props.service === "dayCare" ? "Day Care" : null} {props.service === "errandsCare" ? "Errands Care" : null} {props.service === "homeCare" ? "Home Care" : null}
                <br />
                Check In Time: {new Date(props.checkIn).toLocaleString()}
                <br />
                Expected Check Out Time: {new Date(props.checkOut).toLocaleString()}
              </p>
              <p>
                {props.specificInstructions ? `Specific instructions: ${props.specificInstructions}`: null}
              </p>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-primary yuki-color button-border-color mx-2"
                  data-toggle="modal"
                  data-target={"#AdminBookingAccept" + props.bookingId}
                  href="/"
                >
                  Accept
                </button>

                {props.bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="modal fade"
                    id={"AdminBookingAccept" + booking.id}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="AdminBookingCenterTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="AdminBookingLongTitle">
                            Confirm Booking
                          </h5>
                        </div>
                        <div className="modal-body">
                          Are you sure you want to confirm booking?
                        </div>
                        <div className="modal-footer">
                          <a
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            href="/"
                          >
                            Cancel
                          </a>
                          <button
                            id={booking.id}
                            type="button"
                            className="btn btn-primary button-color"
                            onClick={() => props.handleBookingAcceptance(booking.id)}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <a
                  type="button"
                  className="btn btn-danger"
                  data-toggle="modal"
                  data-target={"#AdminRejectBooking" + props.bookingId}
                  href="/"
                >
                  Reject
                </a>

                <div
                  className="modal fade"
                  id={"AdminRejectBooking" + props.bookingId}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="AdminBookingCenterTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="AdminBookingLongTitle">
                          Are you sure you want to reject booking?
                        </h5>
                      </div>
                      <form>
                        <div className="form-group p-3">
                          <label htmlFor="exampleFormControlTextarea1">
                            Reason for rejecting booking
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            onChange={props.handleRejectionReason}
                          ></textarea>
                        </div>
                      </form>
                      <div className="modal-footer">
                        <a
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                          href="/"
                        >
                          Cancel
                        </a>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => props.handleBookingRejection(props.bookingId)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
