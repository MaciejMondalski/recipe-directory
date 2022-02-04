import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <Link to='/' className='brand'>
          <h1>Diet Planner</h1>
        </Link>
        <Link to='/create' className='create'>
          Create Meal
        </Link>
      </nav>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  background: #58249c;
  display: flex;
  justify-content: center;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 0.8rem auto;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
    }

    .create {
      border: 1px solid #fff;
      border-radius: 6px;
      padding: 6px;

      &:hover {
        background: #fff;
        color: #333;
      }
    }
  }
`;

export default Navbar;