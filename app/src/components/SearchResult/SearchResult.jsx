import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardsContainer>
      <Container>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_img">
              <img src={BASE_URL + image} alt={name} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </div>
            <Button>Rs.{price}</Button>
          </FoodCard>
        ))}
      </FoodCards>
      </Container>
    </FoodCardsContainer>
  );
};

export default SearchResult;

const FoodCards = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  row-gap:50px ;
  column-gap: 50px;
  justify-content: center;
  padding: 50px 0;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;

const FoodCardsContainer = styled.section`
  min-height: calc(100vh);
  /* width: 100%; */
  background-image: url("/foodbg.jpg");
  background-size: cover;
  /* opacity: 0.4; */
`;
