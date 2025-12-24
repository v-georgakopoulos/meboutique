import styled from "styled-components";
import {media} from "../../styles/media"

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
  border-bottom: 1px dotted #000;
  position: relative;
  background: #fff;

  @media ${media.sm} {
    padding:0 10px;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 30px;
  gap: 5px;

  div {
    height: 3px;
    background-color: #000;
    transition: 0.4s;
  }

  .change.bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .change.bar2 {
    opacity: 0;
  }
  .change.bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    font-size: 50px;
    font-weight: bold;
    color: #000;
    text-decoration: none;

    @media ${media.md} {
      font-size:40px;
    }
    @media ${media.sm} {
      font-size:30px;
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  gap: 20px;

  @media ${media.sm} {
    gap:8px;

    svg{
      width:18px;
    }
  }


  .search-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
}

  a {
    color: #000;
    text-decoration: none;
  }

  .sign-out {
    cursor: pointer;
  }
.cart-icon {
  position:relative;
}



  .cart-count {
    position: absolute;
    top:-10px;
    left:15px;
    width:20px;
    height:20px;
    border:1px solid black;
    border-radius:50%;
    background-color:black;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;

    @media ${media.sm} {
      left:5px;
      top:-12px;
    }
  }

`;

export const MobileMenu = styled.ul`
  position: absolute;
  top: 70px;
  left: 0px;
  width:200px;
  background: #fff;
  list-style: none;
  padding: 10px 0;
  z-index: 10;
  animation: slideDown 0.4s ease-out;

  li {
    padding: 10px 20px;
  }

  /* Animation */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


`;


