import crsl2 from '../../assets/images/crsl3.png';
import BoardingServices from '../../assets/images/BoardingServices.png';
import GroomingServices from '../../assets/images/GroomingServices.png';
import h1 from '../../assets/images/gallery/h1.PNG';
import h2 from '../../assets/images/gallery/h2.PNG';
import h3 from '../../assets/images/gallery/h3.PNG';
import v1 from '../../assets/images/gallery/v1.PNG';
import v2 from '../../assets/images/gallery/v2.PNG';
import v3 from '../../assets/images/gallery/v3.PNG';

export default function WhatWeOffer() {

  return (
    <>
      <div className="container" data-bs-spy="scroll" data-bs-target="#navbar-scroll">

        <div class="my-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div id="carouselExampleDark" class="carousel carousel-light slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-3 shadow">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src={crsl2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>The Lobby</h5>
                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src={crsl2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>The Lobby</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={crsl2} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>The Lobby</h5>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div class="col-lg-6 text-end pt-3">
              <div className="container">
                <h4>
                    About Yukimito
                </h4>
                <h1 class="display-4 fw-bold lh-1">
                  <span className='yuki-font-color'>
                    The Standards 
                  </span>
                  <br />
                  Are Higher Here
                </h1>
                <p class="lead">
                  Yukimito Pet Boarding & Hotel Service, is a pet-friendly and professional service for the Illongo’s who are traveling outside of their homes and won’t be able to care of their furry loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <h4>
                What we stand for
            </h4>
            <h1 class="display-5 fw-bold lh-1 mb-3 yuki-font-color">
                We are invested in making 
              <br /> 
              <span className="black-font">
                an incredible place.
              </span>
            </h1>
            <p class="lead">
              Our staff spends time interacting with and monitoring the pets to ensure their safety and happiness while they are with us. 
              <br />
              <br />
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits dramatically visualize.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="card my-2 shadow">
              <div class="card-body lead row">
                <div className="col-1 ">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <div className="col-11">
                  WELL-TRAINED STAFF
                </div>
              </div>
            </div>
            <div class="card my-2 shadow">
            <div class="card-body lead row">
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <div className="col-11">
                  METICULOUS ABOUT MEDS & VACCINES
                </div>
              </div>
            </div>
            <div class="card my-2 shadow">
            <div class="card-body lead row">
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <div className="col-11">
                  CAREFUL ATTENTION TO INDIVIDUAL NEEDS
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr id='Gallery' className='mb-5 pb-5'/>

        <div class="px-4 py-3 my-5 text-center">
          <h4>
            Yukimito Gallery
          </h4>
          <h1 class="display-5 fw-bold">This is our <span className='yuki-font-color'>HOME.</span></h1>
          <div class="col-lg-12 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">

              <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img
                    src={h1}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Boat on Calm Water"
                  />

                  <img
                    src={v1}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Wintry Mountain Landscape"
                  />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src={v2}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Mountains in the Clouds"
                  />

                  <img
                    src={h2}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Boat on Calm Water"
                  />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src={h3}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Waves at Sea"
                  />

                  <img
                    src={v3}
                    class="w-100 shadow-1-strong rounded mb-4 shadow"
                    alt="Yosemite National Park"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr id='Requirements' className='mb-5 pb-5'/>

        <div class="my-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="card my-2 shadow">
                <div class="card-body lead row">
                  <div className="col-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>
                  </div>
                  <div className="col-11">
                    Updated Vet Vaccine Cards
                  </div>
                </div>
              </div>
              <div class="card my-2 shadow">
                <div class="card-body lead row">
                  <div className="col-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>
                  </div>
                  <div className="col-11">
                    Recent Tick and Flea Treatment
                  </div>
                </div>
              </div>
            <div class="card my-2 shadow">
              <div class="card-body lead row">
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <div className="col-11">
                  Bath or Clean Pets
                </div>
              </div>
            </div>
            <div class="card my-2 shadow">
              <div class="card-body lead row">
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" fill="#82C55A" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                </div>
                <div className="col-11">
                  1 Diaper per Day/Stay
                </div>
              </div>
            </div>
          </div>

            <div class="col-lg-6 text-end">
              <div className="container">
                <h4>
                    Pet Boarding Requirements
                </h4>
                <h1 class="display-4 fw-bold lh-1">
                  <span className='yuki-font-color'>
                    The things you
                  </span>
                  <br />
                    need to comply.
                </h1>
                <p class="lead">
                  Yukimito Pet Boarding & Hotel Service, is a pet-friendly and professional service for the Illongo’s who are traveling outside of their homes and won’t be able to care of their furry loved ones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr id='Rates & Services' className='mb-5 pb-5'/>

        <div class="px-4 my-5 text-center">
          <h4>
            Our Rates and Services
          </h4>
          <h1 class="display-5 fw-bold yuki">
            <span className='yuki-font-color'>
            Choose the best 
            </span> 
            <br />
            For your pet.
          </h1>

</div>
<div>


          <h1 class="display-5 fw-bold lh-1 mb-3 yuki-font-color">
                Boarding Services 
            </h1>
            <hr className='mb-2 pb-5'/>
          <img src={BoardingServices} class="d-block w-100" alt="..."/>
          <br />
          
          <h1 class="display-5 fw-bold lh-1 mb-3 yuki-font-color mt-5">
                Grooming Services
            </h1>
            <hr className='mb-2 pb-5'/>
          <img src={GroomingServices} class="d-block w-100" alt="..."/>

      
        </div>

        <hr id='Team' className='pb-5 mb-5'/>

        <div class="row flex-lg-row align-items-center g-5 pb-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <h4>
              The Team
            </h4>
            <h1 class="display-5 fw-bold lh-1 mb-3 yuki-font-color">
                Meet Our Team 
              <br /> 
              <span className="black-font">
                Of True Pet Lovers
              </span>
            </h1>
            <p class="lead">
              Our staff spends time interacting with and monitoring the pets to ensure their safety and happiness while they are with us. 
              <br />
              <br />
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits dramatically visualize.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            
            <div id="carouselExampleDark1" class="carousel carousel-light slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner rounded-3 shadow border">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={crsl2} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Team Photos</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={crsl2} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Team Photos</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={crsl2} class="d-block w-100" alt="..."/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Team Photos</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>

          <div class="row py-5 g-3 text-center">
            <div class="col-sm-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style={{width: '150px'}} alt="Avatar" />
                  </div>
                  <h5 class="card-title">Isabella Santos Cruz</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a class="btn btn-primary button-color" href="#Log In">More Info</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style={{width: '150px'}} alt="Avatar" />
                  </div>
                  <h5 class="card-title">Sophia Reyes Ramos</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a class="btn btn-primary button-color" href="#Log In">More Info</a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3" style={{width: '150px'}} alt="Avatar" />
                  </div>
                  <h5 class="card-title">Gabriela Limjoco Cruz</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a class="btn btn-primary button-color" href="#Log In">More Info</a>
                </div>
              </div>
            </div>
            
          </div>

        </div>

        <hr id='Reviews' className='pb-5 mb-5'/>
        <div class="px-4 py-3 my-5 text-center">
          <h4>
            Ratings and Reviews
          </h4>
          <h1 class="display-5 fw-bold">We Value Your <span className='yuki-font-color'>Trust</span>.</h1>
          <hr className='w-25 mx-auto py-3'/>
          <div class="col-lg-12 mx-auto">

            <div id="myCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item pt-3">
                <div style={{height: '350px'}} className='text-center'>
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 shadow" style={{width: '150px'}} alt="Avatar" /> 
                </div>
                <div class="container">
                  <div class="carousel-caption">
                    <h1 className='black-font'>Mateo Reyes Cruz</h1>
                    <div className="ratings pb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <p className='black-font'>
                    "Yukimito had a pawsitively delightful stay at Purrfection Pet Hotel! The staff showered her with love and attention, and we were impressed by the cozy accommodations. Five-star service for our fur baby!"
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item active pt-3">
                <div style={{height: '350px'}} className='text-center'>
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 shadow" style={{width: '150px'}} alt="Avatar" /> 
                </div>
                <div className="container">
                  <div className="carousel-caption">
                    <h1 className='black-font'>Alessandra Santos Dela Rosa</h1>
                    <div className="ratings pb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <p className='black-font'>
                    "Yukimito had a pawsitively delightful stay at Purrfection Pet Hotel! The staff showered her with love and attention, and we were impressed by the cozy accommodations. Five-star service for our fur baby!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item pt-3">
                <div style={{height: '350px'}} className='text-center'>
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-circle mb-3 shadow" style={{width: '150px'}} alt="Avatar" /> 
                </div>
                <div class="container">
                  <div class="carousel-caption">
                    <h1 className='black-font'>Rafael Manalo Aguilar</h1>
                    <div className="ratings pb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F5CE02" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    </div>
                    <p className='black-font'>
                    "Yukimito had a pawsitively delightful stay at Purrfection Pet Hotel! The staff showered her with love and attention, and we were impressed by the cozy accommodations. Five-star service for our fur baby!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon black-font" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon black-font" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          </div>
        </div>
      

        <hr />

        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold pt-3">Iloilo Pet Hotel and Boarding Services (Yukimito)</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4 text-secondary">
              Pet Hotel & Service located in Mandurriao, Iloilo City
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a class="btn btn-primary button-color" href="#Log In">Log In</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}