
import logoNav from '../../assets/images/Paw.PNG'

export default function NavBarMain(props) {

  let navItems = props.navItems

  return (
    <>
      <div id="Log In" height="30" className="shadow-sm yuki-color navbar-container p-0 fixed-top">
        <div className='container no-padding'>
          <nav id="navbar-scroll" class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler ms-4" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">
            <img src={logoNav} height="30" alt="..."/>
            </a>

            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 nav-pills">
                {navItems.map((item) => {
                  return (
                    <li className="nav-item active px-3 align-middle">
                      <a className="nav-link text-white display-6" href={"#" + item}>{item}</a>
                    </li>
                  )
                })}
                {props.customLink}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
};