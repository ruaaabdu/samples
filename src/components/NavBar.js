import {
  IconButton,
  Flex,
  Heading,
  Spacer,
  Box,
  Input,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import {
  SearchIcon,
  CalendarIcon,
  SettingsIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import SearchField from "react-search-field";
import Calendar from "./Calendar";
import Data from "../Data";
import Drawer from "./Drawer";
import NotificationBar from "./NotificationBar";
export default () => {
  return (
    <>
      <Flex>
        <Box p="2">
          <Drawer />
        </Box>
        <Box p="2">
          <Heading m={2} size="md">
            T.I.P
          </Heading>
        </Box>
        <Spacer />
        <Box>
          {" "}
          <Input placeholder="Basic usage" size="md" width="400px" m={2} />{" "}
        </Box>
        <IconButton aria-label="Search database" icon={<SearchIcon />} m={2} />{" "}
        <Spacer />
        <NotificationBar />
        <Menu bg={"black"}>
          <MenuButton
            as={IconButton}
            aria-label="Search database"
            icon={<CalendarIcon />}
            m={2}
          />
          <MenuList>
            <MenuItem>
              <Calendar />
            </MenuItem>
          </MenuList>
        </Menu>
        <IconButton
          aria-label="Search database"
          icon={<SettingsIcon />}
          m={2}
        />
        <ToggleDark />
      </Flex>
      <Flex></Flex>
    </>
  );
};

function ToggleDark() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} m={2}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
