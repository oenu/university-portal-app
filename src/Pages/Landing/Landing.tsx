import {
  ActionIcon,
  Button,
  Container,
  Group,
  Header,
  Space,
  Stack,
  Title,
} from "@mantine/core";
import { bindActionCreators } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonStars, Sun } from "tabler-icons-react";
import { themeActions } from "../../Redux/Action-Creators";
import { State } from "../../Redux/store";
import { Link } from "react-router-dom";
// Mantine

function Landing() {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const { toggleTheme } = bindActionCreators(themeActions, dispatch);
  return (
    <>
      <Group position="apart">
        <Space />
        <ActionIcon
          variant="outline"
          onClick={() => toggleTheme()}
          title="Toggle color scheme"
          m={10}
        >
          {theme.darkMode ? <Sun size={20} /> : <MoonStars size={20} />}
        </ActionIcon>
      </Group>

      <Container mt={"20vh"}>
        <Stack>
          <Title order={1}> Toronto Awesome University</Title>
          <Group position="center">
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Group>
        </Stack>
      </Container>
    </>
  );
}

export default Landing;
