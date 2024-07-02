import logoNav from '../../assets/images/Paw.PNG'

export default function Navbar() {
  return (
    <>
      <div id="Log In" height="30" className="shadow-sm yuki-color navbar-container p-0 fixed-top">
        <div className='container no-padding'>
          <nav id="navbar-scroll" class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="/">
            <img src={logoNav} height="30" alt="..."/>
            </a>
          </nav>
        </div>
      </div>
    </>
  )
}