import styled from "styled-components";

export const CalendarConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  h1 {
    flex: 1;
  }
  img {
    width: 24px;
    cursor: pointer;
  }
`;

export const ProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  height:100vh;
 
  background: #f2f2f2;

  > div {
    >div{
      display: flex;
      
      img{
        width:24px;
        margin-right: 10px;
        cursor:pointer;
      }
      h3{
       margin: 0 auto;
      }
    }
    padding:20px; 
    background: #fff;
    flex:1;
    
    display: flex;
    flex-direction: column;
  
    select {
      border: none; 
      outline: none; 
      padding: 8px 12px;
      font-size: 14px;
      background-color: #fff;
    }
   button{
      margin-top:10px;
      background-color: black;
      width: 100%;
      padding: 18px;
      border: none;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    align-items: center; 
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

  >
`;

export const ServicePageStyled = styled.div`
  display: flex;
  padding: 20px;
  img {
    width: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
  h3 {
    margin: 0 auto;
  }
`;
