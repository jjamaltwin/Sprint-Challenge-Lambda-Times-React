import React from 'react';
import { TopBarDiv, TopBarDivContainer, ContainerLeftDiv, ContainerCenterDiv, ContainerRightDiv, Spans } from "./Styles";


const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarDivContainer>

        <ContainerLeftDiv>
          <Spans left="true">TOPICS</Spans><Spans left="true">SEARCH</Spans>
        </ContainerLeftDiv>

        <ContainerCenterDiv>
          <Spans center>GENERAL</Spans><Spans center>BROWNBAG</Spans><Spans center>RANDOM</Spans><Spans center>MUSIC</Spans><Spans center>ANNOUNCEMENTS</Spans>
        </ContainerCenterDiv>

        <ContainerRightDiv>
          <Spans right>LOG IN</Spans>
        </ContainerRightDiv>

      </TopBarDivContainer>
    </TopBarDiv>
  )
}
export default TopBar;