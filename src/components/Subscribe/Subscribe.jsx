import Button from "../Button/Button"

import {
  SubscibeContainer,
  SubscribeForm
} from "./Subscribe.styles"

const Subscribe = () => {
  return (
    <SubscibeContainer>
      <h2>Join our newsletter</h2>
      <p>Be the first to know about new arrivals, exclusive offers & sales.</p>
      <SubscribeForm>
        <input type="email" placeholder="Your email address" />
        <Button type="submit">Subscribe</Button>
      </SubscribeForm>
    </SubscibeContainer>
  );
};

export default Subscribe;
