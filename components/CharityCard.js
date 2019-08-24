import React from "react";
import styled from "styled-components";

const CharityCard = props => (
  <AccountCard>
    <CardNumber>{props.cardNumber}</CardNumber>
    <CardInfo>
      <CardholderName>{props.cardholderName}</CardholderName>
      <CardExp>{props.cardExp}</CardExp>
    </CardInfo>
  </AccountCard>
);

export default CharityCard;

const AccountCard = styled.View`
  width: 295px;
  height: 160px;
  background: #120076;
  border-radius: 30px;
  align-items: center;
  padding-right: 10px;
  margin-left: 40px;
  margin-top: 40px;
`;

const CardNumber = styled.Text`
  color: white;
  margin-top: 35px;
  font-size: 20px;
`;

const CardholderName = styled.Text`
  color: white;
  font-size: 15px;
  margin-right: 10px;
`;

const CardExp = styled.Text`
  color: white;
  font-size: 15px;
  margin-left: 10px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  margin-top: 50px;
`;

// const Container = styled.View`

// `

// const Cover = styled.View`
//     width: 180px;
//     height: 220px;
// `

// const Image = styled.Image`
//     width: 100%;
//     height: 100%;
// `

// const Text = styled.Text`
//     font-size: 15px;
// `
