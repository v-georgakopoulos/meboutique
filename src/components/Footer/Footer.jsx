import {
  FooterContainer,
  FooterGrid,
  FooterBrand,
  FooterLinks,
  FooterBottom,
  FooterLinksContainer
} from "./Footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterBrand>
          <h2>Boutique</h2>
          <p>Modern fashion for everyday life.</p>
        </FooterBrand>
    <FooterLinksContainer>
        <FooterLinks>
          <h4>Shop</h4>
          <ul>
            <li>Womens</li>
            <li>Mens</li>
            <li>Sneakers</li>
            <li>Jackets</li>
            <li>Hats</li>
          </ul>
        </FooterLinks>

        <FooterLinks>
          <h4>Help</h4>
          <ul>
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </FooterLinks>

        <FooterLinks>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </FooterLinks>
    </FooterLinksContainer>
      </FooterGrid>

      <FooterBottom>
        <p>© {new Date().getFullYear()} Boutique. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
