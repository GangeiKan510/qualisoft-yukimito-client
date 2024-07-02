
import logoNav from '../../assets/images/Paw.PNG'
import Logout from './Logout'

export default function NavBarUser(props) {

  let navItems = props.navItems

  return (
    <>
      <div height="75" className="shadow-sm yuki-color navbar-container p-0">
        <div className='container-fluid no-padding'>
          <nav class="navbar navbar-expand-lg navbar-dark px-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/ClientRegister">
            <img src={logoNav} height="65" alt="..."/>
            </a>

            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                {navItems.map((item) => {
                  return (
                    <li class="nav-item active px-3 align-middle">
                      <a class="nav-link text-white" href={item.link}>{item.name}</a>
                    </li>
                  )
                })}
                <Logout />
              </ul>
            </div>
          </nav>
        </div>
    </div>
    </>
  )
};