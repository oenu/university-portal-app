import { Button, Container, Group, Space, Stack, Title } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import ThemeModeButton from "../../features/theme/themeModeButton";

// Mantine

function Landing() {
  return (
    <>
      <Group position="apart">
        <Space />
        <ThemeModeButton />
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
