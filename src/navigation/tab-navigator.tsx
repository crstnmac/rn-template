import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Account, Cart, Dashboard } from '@/screens';
import {
  Account as AccountIcon,
  Basket as BasketIcon,
  Home as HomeIcon,
} from '@/ui';

type TabParamList = {
  Account: undefined;
  Dashboard: undefined;
  Cart: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabIcons: TabIconsType = {
  Account: (props: SvgProps) => <AccountIcon {...props} />,
  Cart: (props: SvgProps) => <BasketIcon {...props} />,
  Dashboard: (props: SvgProps) => <HomeIcon {...props} />,
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};
type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const tabs: TabType[] = [
  {
    name: 'Dashboard',
    component: Dashboard,
    label: 'Dashboard',
  },
  {
    name: 'Cart',
    component: Cart,
    label: 'Cart',
  },
  {
    name: 'Account',
    component: Account,
    label: 'Account',
  },
];

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
        tabBarStyle: [{ backgroundColor: 'white' }, { borderWidth: 1 }],
      })}
    >
      <Tab.Group screenOptions={{ headerShown: false }}>
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
