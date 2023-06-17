import { Link } from "react-scroll";
import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  .category-links {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background: var(--background-color);
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    input {
      flex: 1;
      border: none;
      padding: 8px;
    }
    .search-icon {
      padding: 8px;
      color: gray;
      cursor: pointer;
      img {
        width: 16px;
      }
    }
  }
  h3 {
    text-align: start;
  }

  .service-item {
    cursor: pointer;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .service-info {
      display: flex;
      font-size: 16px;
      font-weight: 600;
      > div > div {
        display: flex;
      }
    }
  }
  .service-item.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }
  .service-toggle {
    display: flex;
    place-items: centre;
    max-height: 28px;
    button {
      border: none;
      border-radius: 50%;
      background-color: rgb(170 170 170);
      font-size: 20px;
      font-weight: 200;
    }
  }
  .selected-service {
    position: sticky;
    bottom: 0;
    z-index: 1;
    padding: 2rem 0 0 0;
    button {
      background-color: black;
      width: 100%;
      padding: 18px;
      border: none;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const NavLinks = styled(Link)`
  background-color: black;
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #fff;
`;
