import React from "react";
import styled from "styled-components";

const Donations = props => (
  <Container>
    <Cover>
      <Image source={props.image} resizeMode="contain" />
    </Cover>
    <Caption>{props.caption}</Caption>
  </Container>
);

export default Donations;

const Container = styled.View`
  align-items: center;
  padding-right: 25px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Caption = styled.Text`
  margin-top: 10px;
  font-size: 18px;
`;

const Cover = styled.View`
  width: 180px;
  height: 220px;
  background: white;
  /* overflow: hidden; */
  /* border-top-left-radius: 14px;
  border-top-right-radius: 14px; */
  overflow: hidden;
  border-radius: 14px;
  /* padding-right: 25px; */
  /* justify-content: space-evenly; */
`;
