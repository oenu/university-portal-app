import { ActionIcon, AppShell, Group, Header, Navbar } from "@mantine/core";
import { bindActionCreators } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonStars, Sun } from "tabler-icons-react";
import ThemeModeButton from "../../features/theme/themeModeButton";
import { toggleTheme } from "../../features/theme/themeSlice";
import { RootState } from "../../Redux/store";

function Dashboard() {
  return (
    <div>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            {/* Navbar content */} Navbar content
          </Navbar>
        }
        header={
          <Header height={50} p="xs">
            <Group position="apart">
              Name
              <ThemeModeButton />
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        Apps
      </AppShell>
    </div>
  );
}

export default Dashboard;
