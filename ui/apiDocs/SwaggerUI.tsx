/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
const SwaggerUIReact = dynamic(() => import('swagger-ui-react'), {
  loading: () => <ContentLoader/>,
  ssr: false,
});

import type { SystemStyleObject } from '@chakra-ui/react';
import { Box, useColorModeValue, useToken } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

import config from 'configs/app';
// eslint-disable-next-line import-helpers/order-imports
import ContentLoader from 'ui/shared/ContentLoader';

import 'swagger-ui-react/swagger-ui.css';
// eslint-disable-next-line import-helpers/order-imports
import colors from 'theme/foundations/colors';

const feature = config.features.restApiDocs;

const DEFAULT_SERVER = 'blockscout.com/poa/core';

const CustomArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.759 3.65522L8.46255 12.3356C8.23398 12.6499 7.76612 12.6499 7.53934 12.3356L1.24112 3.65522C1.22562 3.63387 1.21634 3.60865 1.2143 3.58234C1.21225 3.55604 1.21754 3.52969 1.22956 3.5062C1.24158 3.48272 1.25986 3.46302 1.28239 3.44929C1.30492 3.43557 1.33081 3.42835 1.35719 3.42843H2.69648C2.78755 3.42843 2.87326 3.47307 2.92684 3.54629L8.00005 10.5391L13.0733 3.54629C13.1268 3.47307 13.2125 3.42843 13.3036 3.42843H14.6429C14.759 3.42843 14.8268 3.56058 14.759 3.65522V3.65522Z" fill="#F5F5F5"/>
  </svg>
);

const CustomArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    // eslint-disable-next-line max-len
    <path d="M14.6427 12.5713H13.3034C13.2123 12.5713 13.1266 12.5266 13.073 12.4534L7.99981 5.46057L2.92659 12.4534C2.87302 12.5266 2.78731 12.5713 2.69624 12.5713H1.35695C1.24088 12.5713 1.17302 12.4391 1.24088 12.3445L7.53731 3.66415C7.76588 3.34986 8.23374 3.34986 8.46052 3.66415L14.757 12.3445C14.8266 12.4391 14.7587 12.5713 14.6427 12.5713V12.5713Z" fill="#F5F5F5"/>
  </svg>
);
const NeverShowInfoPlugin = () => {
  return {
    components: {
      SchemesContainer: () => null,
      ServersContainer: () => null,
      InfoContainer: () => null,
    },
    wrapComponents: {
      ArrowUpIcon: () => CustomArrowUpIcon,
      ArrowDownIcon: () => CustomArrowDownIcon,
    },
  };
};

const SwaggerUI = () => {
  const mainColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');
  const borderColor = useToken('colors', 'divider');
  const mainBgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200');

  const swaggerStyle: SystemStyleObject = {
    '.swagger-ui .scheme-container, .opblock-tag': {
      display: 'none',
    },
    '.swagger-ui': {
      color: mainColor,
    },
    '.swagger-ui .opblock.opblock-get': {
      bgColor: colors.gray[700],
      borderColor: colors.blue[500],
    },
    '.swagger-ui .opblock-summary-control .opblock-summary-method': {
      bgColor: colors.blue[500],
      color: '#212405',
    },
    '.swagger-ui .opblock-summary-control:focus': {
      outline: 'none',
    },
    // eslint-disable-next-line max-len
    '.swagger-ui .opblock .opblock-summary-path, .swagger-ui .opblock .opblock-summary-description, .swagger-ui div, .swagger-ui p, .swagger-ui h5, .swagger-ui .response-col_links, .swagger-ui h4, .swagger-ui table thead tr th, .swagger-ui table thead tr td, .swagger-ui .parameter__name, .swagger-ui .parameter__type, .swagger-ui .response-col_status, .swagger-ui .tab li, .swagger-ui .opblock .opblock-section-header h4': {
      color: 'unset',
    },
    '.swagger-ui input': {
      color: 'blackAlpha.800',
    },
    '.swagger-ui .opblock .opblock-section-header': {
      background: useColorModeValue('whiteAlpha.800', 'blackAlpha.800'),
    },
    '.swagger-ui .response-col_description__inner p, .swagger-ui .parameters-col_description p': {
      margin: 0,
    },
    '.swagger-ui .wrapper': {
      padding: 0,
    },
    '.swagger-ui .prop-type': {
      color: useColorModeValue('blue.600', 'blue.400'),
    },
    '.swagger-ui .btn.try-out__btn': {
      borderColor: useToken('colors', 'link'),
      color: useToken('colors', 'link'),
      borderRadius: 'sm',
    },
    '.swagger-ui .btn.try-out__btn:hover': {
      boxShadow: 'none',
      borderColor: useToken('colors', 'link_hovered'),
      color: useToken('colors', 'link_hovered'),
    },
    '.swagger-ui .btn.try-out__btn.cancel': {
      borderColor: useToken('colors', 'error'),
      color: useToken('colors', 'error'),
    },
    '.swagger-ui .btn.try-out__btn.cancel:hover': {
      borderColor: useColorModeValue('red.600', 'red.500'),
      color: useColorModeValue('red.500', 'red.400'),
    },

    // MODELS
    '.swagger-ui section.models': {
      borderColor: borderColor,
    },
    '.swagger-ui section.models h4': {
      color: mainColor,
    },
    '.swagger-ui section.models .model-container': {
      bgColor: mainBgColor,
    },
    '.swagger-ui .model-title': {
      wordBreak: 'break-all',
      color: mainColor,
    },
    '.swagger-ui .model': {
      color: mainColor,
    },
    '.swagger-ui .model-box-control:focus': {
      outline: 'none',
    },
    '.swagger-ui .model-toggle': {
      bgColor: useColorModeValue('transparent', 'whiteAlpha.700'),
      borderRadius: 'sm',
    },
    '.swagger-ui .model .property.primitive': {
      color: useToken('colors', 'text_secondary'),
      wordBreak: 'break-all',
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reqInterceptor = React.useCallback((req: any) => {
    if (!req.loadSpec) {
      const newUrl = new URL(req.url.replace(DEFAULT_SERVER, config.api.host));

      newUrl.protocol = config.api.protocol + ':';

      if (config.api.port) {
        newUrl.port = config.api.port;
      }

      req.url = newUrl.toString();
    }
    return req;
  }, []);

  if (!feature.isEnabled) {
    return null;
  }

  return (
    <Box sx={ swaggerStyle }>
      <SwaggerUIReact
        url={ feature.specUrl }
        plugins={ [ NeverShowInfoPlugin ] }
        requestInterceptor={ reqInterceptor }
      />
    </Box>
  );
};

export default SwaggerUI;
