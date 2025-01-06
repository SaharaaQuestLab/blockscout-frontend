import type { GridProps, HTMLChakraProps } from '@chakra-ui/react';
import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import IconSvg from 'ui/shared/IconSvg';
import { CONTENT_MAX_WIDTH } from 'ui/shared/layout/utils';

const containerProps: HTMLChakraProps<'div'> = {
  as: 'footer',
  borderTopWidth: '1px',
  borderTopColor: 'solid',
};

const contentProps: GridProps = {
  px: { base: 4, lg: config.UI.navigation.layout === 'horizontal' ? 6 : 12, '2xl': 6 },
  py: { base: 2, lg: 4 },
  maxW: `${ CONTENT_MAX_WIDTH }px`,
  m: '0 auto',
};

const SocialLink = [
  {
    icon: 'social/twitter' as const,
    iconSize: '28px',
    url: 'https://x.com/SaharaLabsAI',
  },
  {
    icon: 'social/discord' as const,
    iconSize: '28px',
    url: 'https://discord.com/invite/wwY5KvYFPC',
  },
  {
    icon: 'social/telega' as const,
    iconSize: '28px',
    url: 'https://t.me/saharaaiofficial',
  },

];

const Footer = () => {
  return (
    <Box { ...containerProps }>
      <Flex { ...contentProps } alignItems="center" justifyContent="space-between">
        <span>Sahara AI</span>
        <Flex gap={ 4 } cursor="pointer">
          {
            SocialLink.map((link) => {
              return (
                <Link href={ link.url } color="white" key={ link.url } target="_blank" >
                  <IconSvg boxSize={ link.iconSize || 5 } name={ link.icon }/>
                </Link>
              );
            })
          }
        </Flex>
      </Flex>
      <Flex { ...contentProps } justifySelf="flex-start">
        <span>© 2025 Sahara Testnet</span>
      </Flex>
    </Box>
  );
};

export default React.memo(Footer);
