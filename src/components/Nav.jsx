import { hamburger } from "../assets/icons"
import { ilaraelarge } from "../assets/images";
import { diffuse } from "../assets/icons";
// import { navLinks } from "../constants/index"

const Nav = () => {
  return (

    <nav className='flex justify-between items-center max-container'>
      <a href='/'>
        <img
          src={ilaraelarge}

          alt='ilarae'
          width={1290}
          height={1290}

        />
      </a>

      <div>
        <img src={diffuse}
          alt="diff"
          width={1200}
          height={1200}
        />
      </div>

      <div className="hidden max-lg:block">
        <img
          src={hamburger}
          alt="ham"
          width={250}
          height={250}
        />
      </div>


    </nav>

  );
};

export default Nav;
