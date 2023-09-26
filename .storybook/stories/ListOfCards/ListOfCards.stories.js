import React from 'react';
import { View } from 'react-native';
import ListOfCards from '../../../src/components/ListOfCards';
import { NavigationContainer } from '@react-navigation/native';

const ListOfCardsMeta = {
    title: 'ListOfCards',
    component: ListOfCards,
    args: [{
        csupply: "",
        id: "1",
        market_cap_usd: "",
        msupply: "",
        name: "2",
        nameid: "",
        percent_change_1h: "",
        percent_change_24h: "",
        percent_change_7d: "",
        price_btc: "",
        price_usd: "",
        rank: 1,
        symbol: "",
        tsupply: "",
        volume24: 1,
        volume24a: 1,
    },
    {
        csupply: "2",
        id: "2",
        market_cap_usd: "2",
        msupply: "2",
        name: "2",
        nameid: "2",
        percent_change_1h: "2",
        percent_change_24h: "2",
        percent_change_7d: "2",
        price_btc: "2",
        price_usd: "2",
        rank: 1,
        symbol: "2",
        tsupply: "2",
        volume24: 2,
        volume24a: 2,
    }],
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

export default ListOfCardsMeta;

export const Basic = {};
