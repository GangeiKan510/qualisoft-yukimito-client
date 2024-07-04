export default function ServicecCard(props) {
  return (
    <>
      <div class="col-md-12">
        <div class="card h-100">
          <img src={props.src} class="card-img-top" alt={props.alt}/>
          <div class="card-body">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>{props.service}</span>
            </h1>
            <p>
              <div>{props.checkIn}</div>
              <div>{props.checkOut}</div>
              <div>{props.operatingTime}</div>
            </p>

            <hr />

            <p class="text-secondary">
              {props.description}
            </p>

            <hr />

            <h5 className="lead text-dark mt-5 text-center card-header rounded">
              Starting at:
              <br />
              <span className="h1 fw-bold">₱{props.price}.00</span><span className="text-secondary"> 
              <br /> 
              for {props.duration}hrs.</span>
            </h5>
          </div>
          <div class="card-footer d-flex justify-content-center">
            <button type="button" class="btn text-white button-color" data-bs-toggle="modal" onClick={props.onClick} data-bs-target="#exampleModal" disabled={props.disabled}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
