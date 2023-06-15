import styled from "styled-components";

export const BookingContainer = styled.div`
  text-align: start; 
  padding-inline: 20px;
  font-size: 18px;

  .hours {
    display: flex;
    gap: 20px;
    justify-content: start; 
  }

  .desc {
    display: flex;
    gap: 10px;
    justify-content: start; 
  }

  span:last-child {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
