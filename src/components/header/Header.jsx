import Link from "next/link";

const Header = () => {
  return (
    <header className="site-navbar navbar-s-sticky" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10 col-xl-4 d-flex">
            <Link className="navbar-brand" href="/">
              <img className="img-fluid d-flex" src="/images/logo.png" alt="" />
            </Link>
            {/*                <h1 class="mb-0 site-logo"><a href="index.html" class="text-white mb-0">Brand</a></h1>*/}
          </div>
          <div className="col-2 col-md-8 d-none d-xl-inline-block">
            <nav
              className="navbar ms-auto navbar-sticky nav-sticky navbar-expand-md navbar-light p-2 site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav ms-auto d-none d-lg-inline-block">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    হোম
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about-us">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    যোগাযোগ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blogs">
                    ব্লগ পোস্ট
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-danger last-button" href="/courses">
                    ব্রাউজ কোর্স
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 pb-sm-5 mb-small"
            style={{ position: "relative", left: "90%" }}
          >
            <Link
              href="#"
              className="site-menu-toggle js-menu-toggle text-sm-dark text-color"
            >
              <span className="icon-menu h3" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
