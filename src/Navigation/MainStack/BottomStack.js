/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Routes from '../Routes/index';
import Home from '../../Screens/Home';
import App from '../../Screens/App';
import Profile from '../../Screens/Profile';
import {IconX, ICON_TYPE} from '../../Icons';
import {createStackNavigator} from '@react-navigation/stack';
import useAppTheme from '../../Themes/Context';
import useTranslation from '../../i18n';
import NavigationStyles from '../../Styles/NavigationStyles';
import theme from '../../Themes/configs/default';

const HomeStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t(''),
          headerStyle: [
            {backgroundColor: theme.colors.background},
          ],
        }}
        name="homestackscreen"
        component={Home}
      />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: t('profile'),
          headerStyle: [
            NavigationStyles.header_statusBar,
            {backgroundColor: theme.colors.background},
          ],
          headerTitleStyle: [
            NavigationStyles.headerTitle,
            {color: theme.colors.headerTitle},
          ],
        }}
        name="profilestackscreen"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

const NotificationStackScreen = () => {
  const {t} = useTranslation();
  const {theme} = useAppTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={(route, navigation) => {
          return {
            title: t('settings'),
            headerStyle: [
              NavigationStyles.header_statusBar,
              {backgroundColor: theme.colors.header},
            ],
            headerTitleStyle: [
              NavigationStyles.headerTitle,
              {color: theme.colors.headerTitle},
            ],
          };
        }}
        name="notificationsstackscreen"
        component={App}
      />
    </Stack.Navigator>
  );
};

function getHomeIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.MATERIAL_ICONS}
      name={'home'}
      color={theme.colors.grey}
    />
  );
}

function getProfileIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.MATERIAL_ICONS}
      name={'videogame-asset'}
      color={theme.colors.grey}
    />
  );
}

function getNotificationIcon({focused, color}) {
  return (
    <IconX
      style={{marginBottom: 5}}
      origin={ICON_TYPE.ANT_ICON}
      name={'wallet'}
      color={theme.colors.grey}
    />
  );
}

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  const {theme} = useAppTheme();
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      backBehavior={'initialRoute'}
      inactiveColor={theme.colors.grey500}
      activeColor={theme.colors.grey900}
      barStyle={{backgroundColor: theme.colors.primary}}
      labeled={true}>
      <Tab.Screen
        options={{
          tabBarIcon: getHomeIcon,
          title: 'Home',
        }}
        name={Routes.HOME_SCREEN}
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getProfileIcon,
          title: 'PlayGame',
        }}
        name={Routes.PROFILE_SCREEN}
        component={ProfileStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getNotificationIcon,
          title: 'Wallet',
        }}
        name={Routes.NOTIFICATION_SCREEN}
        component={NotificationStackScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'bottomtabs'} component={BottomTabs} />
    </Stack.Navigator>
  );
};
