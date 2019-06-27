import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin-bottom: 10px;
`;

const Footer = styled.div`
  font-size: 0.7rem;
  color: #888;
  text-align: center;
  line-height: 1.4;
  text-transform: uppercase;
`;

interface Sidebar {
  children: any;
}

const Sidebar = ({ children }: Sidebar) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
      <Footer>
        Ribhararnus Pracutian
        <br />
        &copy; {new Date().getFullYear()} Crafted with Love
      </Footer>
    </Wrapper>
  );
};

export default Sidebar;
