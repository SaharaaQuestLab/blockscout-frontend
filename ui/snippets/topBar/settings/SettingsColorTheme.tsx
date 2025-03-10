import { useColorMode } from '@chakra-ui/react';
import React from 'react';

import * as cookies from 'lib/cookies';
// import { COLOR_THEMES } from 'lib/settings/colorTheme';

// import SettingsSample from './SettingsSample';

interface Props {
  onSelect?: () => void;
}

const SettingsColorTheme = ({ }: Props) => {
  const { setColorMode } = useColorMode();

  const [ , setActiveHex ] = React.useState<string>();

  const setTheme = React.useCallback((hex: string) => {
    // const nextTheme = COLOR_THEMES.find((theme) => theme.hex === hex);

    // if (!nextTheme) {
    //   return;
    // }

    setColorMode('dark');

    const varName = '--chakra-colors-black';
    window.document.documentElement.style.setProperty(varName, hex);

    cookies.set(cookies.NAMES.COLOR_MODE_HEX, hex);
    window.localStorage.setItem(cookies.NAMES.COLOR_MODE, 'dark');
  }, [ setColorMode ]);

  React.useEffect(() => {
    // const cookieColorMode = cookies.get(cookies.NAMES.COLOR_MODE);

    // const nextColorMode = (() => {
    //   if (!cookieColorMode) {
    //     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    //   }

    //   return cookieColorMode;
    // })();

    // const colorModeThemes = COLOR_THEMES.filter(theme => theme.colorMode === nextColorMode);
    // const fallbackHex = colorModeThemes[colorModeThemes.length - 1].hex;
    // const cookieHex = cookies.get(cookies.NAMES.COLOR_MODE_HEX) ?? fallbackHex;
    setTheme('#1D2021');
    setActiveHex('#1D2021');
  // should run only on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  // const handleSelect = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
  //   event.stopPropagation();

  //   const hex = event.currentTarget.getAttribute('data-value');

  //   if (!hex) {
  //     return;
  //   }

  //   setTheme(hex);
  //   setActiveHex(hex);
  //   onSelect?.();
  // }, [ setTheme, onSelect ]);

  // const activeTheme = COLOR_THEMES.find((theme) => theme.hex === activeHex);

  return (
    <div>
      { /* <Box fontWeight={ 600 }>Color theme</Box> */ }
      { /* <Box color="text_secondary" mt={ 1 } mb={ 2 }>{ activeTheme?.label }</Box> */ }
      { /* <Flex>
        { COLOR_THEMES.map((theme) => (
          <SettingsSample
            key={ theme.label }
            label={ theme.label }
            value={ theme.hex }
            bg={ theme.sampleBg }
            isActive={ theme.hex === activeHex }
            onClick={ handleSelect }
          />
        )) }
      </Flex> */ }
    </div>
  );
};

export default React.memo(SettingsColorTheme);
