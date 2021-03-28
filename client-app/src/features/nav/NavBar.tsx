import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
     <Container>
     <Menu.Item>
       <img src='/assets/logo.png' alt='logo' style={{marginRight:'10px'}}/>
       Dotnet with React App
     </Menu.Item>
      <Menu.Item name="Activities" />
      <Menu.Item>
        <Button positive content='Create New Activity'></Button>
      </Menu.Item>
     </Container>
    </Menu>
  );
};
