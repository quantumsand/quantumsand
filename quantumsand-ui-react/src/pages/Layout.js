import { Outlet, Link } from "react-router-dom";

const Layout = ({debug}) => {
  return (
    <>
      {debug && <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/sampleribbon">SampleRibbon</Link>
          </li>
          <li>
            <Link to="/avcontrols">AVControls</Link>
          </li>
          <li>
            <Link to="/barcode">Barcode</Link>
          </li>
          <li>
            <Link to="/subtitles">Subtitles</Link>
          </li>
          <li>
            <Link to="/adverts">Adverts</Link>
          </li>
          <li>
            <Link to="/ebook">EBook</Link>
          </li>
          <li>
            <Link to="/video-narrative">Video narrative</Link>
          </li>
        </ul>
      </nav>}

      <Outlet />
    </>
  )
};

export default Layout;
