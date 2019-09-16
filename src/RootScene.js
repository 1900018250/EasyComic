import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from '@ant-design/react-native'

import  FindNavigator from './components/find/Find'
import  Used from './components/used/Used'
import  More from './components/more/More'


/**
 * 得到tab的图标
 * @param {any} navigation 导航数据
 * @param {boolean} focused 是否是聚焦状态
 * @param {any} tintColor 颜色配置
 * @return {JSX} 按钮jsx
 */
const getTabBarIcon = (navigation, focused, tintColor) => {
    const FIND = '发现'
    const USED = '最近使用'
    const MORE = '更多'
    const { routeName } = navigation.state
    let iconName = 'compass'
    if (routeName === FIND) {
        iconName = 'compass'
    } else if (routeName === USED) {
        iconName = 'book'
    } else if (routeName === MORE) {
        iconName = 'menu'
    }
    return <Icon name={iconName} size={24} color={tintColor} />
}


// 底部导航栏配置
const TabNavigator = createBottomTabNavigator(
    {
        发现: { screen: FindNavigator },
        最近使用: { screen: Used },
        更多: { screen: More }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
          activeTintColor: 'rgb(78,154,248)',
          inactiveTintColor: 'rgb(161,161,161)',
        },
    }
)


export default TabNavigator

