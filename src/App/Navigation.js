import { useAppStore } from '../App/stores';
import { Image, Flex, Box, NavLink } from '../Primitives';

function Navigation() {
  const isDark = useAppStore((state) => state.isDark);

  return (
    <Flex bg="nav" height="nav">
      <NavLink to="/" exact>
        <Box height={'navIcon'} p={[1, 0]}>
          <Image
            height="100%"
            width="unset"
            alt="PaNOSC logo"
            src={!isDark ? '/PaNOSC_logo_black.svg' : '/PaNOSC_logo_white.svg'}
          />
        </Box>
      </NavLink>
      <NavLink to="/documents" exact>
        Explore
      </NavLink>

      {/* <Box mx="auto" />
      <Box width="80px" mx={2} height="30px" alignSelf="center">
        <Switch
          options={[{ label: 'Light' }, { label: 'Dark' }]}
          forcedSelectedIndex={isDark ? 1 : 0}
          onChange={() => toggleTheme()}
        />
      </Box> */}
    </Flex>
  );
}

export default Navigation;
