import React from 'react';
import { ScrollView, Text, View, TouchableOpacity,  StatusBar, Image } from 'react-native'
import { Tabs, Icon  } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { List } from '@ant-design/react-native';
import styled from 'styled-components/native'

import Search from '../Search'
import { COLOR }  from '../../config'
import Item from '@ant-design/react-native/lib/list/ListItem';

// const Item = List.Item
const More = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: 10,
                backgroundColor: COLOR.BG_COLOR,
            }}
        >
            <Text
                style={{
                    paddingHorizontal: 16,
                    fontSize: 14,
                    color: '#999'
                }}
            >配置</Text>
            <List
                style={{
                    marginTop: 8,
                }}
            >
                <Item  arrow="horizontal"><Text>备份云端</Text></Item>
                <Item arrow="horizontal"><Text>导出数据</Text></Item>
                <Item arrow="horizontal"><Text>高级设置</Text></Item>
            </List>
        </View>
    )
}


More.navigationOptions = ({ navigation }) => {
    return {
      title: '更多',
      headerRight: (
        <View 
            style={{
                paddingHorizontal: 16
            }}
        >
        </View>
        ),
  
      headerLeft: (
            <TouchableOpacity 
            // onPress={() => navigation.navigate('Search')}
            >   
                <View style={{paddingHorizontal: 16}}>
                    <Icon 
                        name='bell'
                        color={COLOR.MAIN}
                        size={24}
                    />
                </View>
            </TouchableOpacity>
      ),
      headerTitleStyle:{
          alignSelf:'center',
          textAlign: 'center',
          flex:1,
          fontSize: 15,
          fontWeight: 'bold', 
          
      },
      headerStyle: {
          marginTop: -8,
          elevation: 1 // 去除阴影
      }
   }
  };
  
  
  const MoreNavigator = createStackNavigator(
    {
      Collection: createStackNavigator(
          {
            More: More,
          },
        ),
        Search: Search
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  )
  
  
  MoreNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

export default MoreNavigator