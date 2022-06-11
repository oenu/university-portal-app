import React from "react";

import { useDispatch, useSelector } from "react-redux";

import * as themeActionCreators from "../../Redux/Action-Creators/theme_action_creators";
import { bindActionCreators } from "@reduxjs/toolkit";

import { store, State } from "../../Redux/store";
import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import { themeActions } from "../../Redux/Action-Creators";

function Dashboard() {
  const dispatch = useDispatch();
  const theme = useSelector((state: State) => state.theme);
  const { toggleTheme } = bindActionCreators(themeActions, dispatch);

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
              <ActionIcon
                variant="outline"
                onClick={() => toggleTheme()}
                title="Toggle color scheme"
              >
                {theme.darkMode ? <Sun size={20} /> : <MoonStars size={20} />}
              </ActionIcon>
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
