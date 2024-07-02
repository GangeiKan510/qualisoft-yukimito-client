export default function ServicecCard(props) {

  return (
    <>
      <div class="col-md-12">
        <div class="card h-100 shadow">
          <img src={props.src} class="card-img-top" alt={props.alt}/>
          <div class="card-body">
            <h1 class="display-6 fw-bold lh-1 lead">
              <span>{props.service}</span>
            </h1>
            <p>
              {props.checkIn}
              <br />
              {props.checkOut}
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
              for {props.duration} mins.</span>
            </h5>
          </div>
          <div class="card-footer d-flex justify-content-center">
            <a
              class="btn btn-primary button-color mt-1"
              href={"/PetOwnerBooking/" + props.service}
            >
              Book This Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
}