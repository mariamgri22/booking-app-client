import styled from "styled-components";

export const CalendarWrapper = styled.div`
  padding: 20px;
  position: sticky;
  top: 0;
  background: #fff;
  > div > div {
    overflow-y: auto;
    padding: 10px;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    > div {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      > div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        > div {
          padding: 10px;

          > div {
            font-weight: bold;
            font-size: 18px;
          }

          span {
            margin-top: 4px;
            font-size: 14px;
            color: #666;
          }
        }
        .current-day {
          background-color: rgb(225 224 224);
          border-radius: 18px;
        }
        .selected {
          background-color: #000;
          color: #fff;
          border-radius: 18px;
        }
      }
    }
  }
`;

export const HourWrapper = styled.div`
  padding: 20px;

  > div {
    > div {
      border-radius: 25px;
      border: 2px solid;
      border-color: #675f5f94;
      padding: 20px;
      margin: 10px;
      h3 {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
    .button-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      .hour-button {
        display: block;
        width: 100%;
        padding: 18px;
        border-color: #675f5f94;
        background-color: #fff;
        border-radius: 25px;
        color: #333;
        cursor: pointer;
      }
      .selected {
        background-color: #000;
        color: #fff;
      }
    }
  }
  .selected-hour {
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
