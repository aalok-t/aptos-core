// Copyright (c) Aptos
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  Box,
  VStack,
} from '@chakra-ui/react';
import WalletLayout from 'core/layouts/WalletLayout';
import withSimulatedExtensionContainer from 'core/components/WithSimulatedExtensionContainer';
import NetworkBody from 'core/components/NetworkBody';
import AuthLayout from 'core/layouts/AuthLayout';
import { Routes as PageRoutes } from 'core/routes';

function Network() {
  return (
    <AuthLayout routePath={PageRoutes.network.routePath}>
      <WalletLayout backPage="/settings">
        <VStack width="100%" paddingTop={8}>
          <Box px={4} pb={4} width="100%">
            <NetworkBody />
          </Box>
        </VStack>
      </WalletLayout>
    </AuthLayout>
  );
}

export default withSimulatedExtensionContainer({ Component: Network });
