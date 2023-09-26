import React from 'react';
import { View } from 'react-native';
import TokenCard from '../../../src/components/TokenCard/TokenCard';
import { NavigationContainer } from '@react-navigation/native';

export const TokenCardMeta = {
    title: 'TokenCard',
    component: TokenCard,
    argTypes: {
        onPress: { action: 'pressed the button' },
    },
    args: {
        token: { "id": "90", "symbol": "BTC", "name": "Bitcoin", "nameid": "bitcoin", "rank": 1, "price_usd": "26132.55", "percent_change_24h": "-0.43", "percent_change_1h": "-0.20", "percent_change_7d": "-2.58", "price_btc": "1.00", "market_cap_usd": "508825486921.92", "volume24": 6280637402.078317, "volume24a": 7979003931.446185, "csupply": "19470946.00", "tsupply": "19470946", "msupply": "21000000" },
        navigate: () => { }
    },
    decorators: [
        (Story) => (
            <View style={{ justifyContent: 'center', flex: 1, width: '100%' }}>
                <NavigationContainer>
                    <Story />
                </NavigationContainer>
            </View>
        ),
    ],
};
