import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Button, StatusBar } from 'react-native'
import { Tabs, Icon  } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { List, Popover, Checkbox } from '@ant-design/react-native';

import Search from '../Search'
import { COLOR }  from '../../config'
import {  SwipeAction } from '@ant-design/react-native';


class BasicSwipeActionExample extends React.Component {
  render() {
    const right = [
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ];
    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            autoClose
            // style={{ backgroundColor: 'transparent' }}
            right={right}
            onOpen={() => console.log('open')}
            onClose={() => console.log('close')}
          >
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    );
  }
}

const Used = (props) => {
    const right = [
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ]

    return (
        <View 
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
            // backgroundColor: 'pink',
            backgroundColor: COLOR.BG_COLOR,
            
          }}
        >
          <SwipeAction
              autoClose
              style={{ 
                backgroundColor: COLOR.BG_COLOR 
              }}
              right={right}
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >
              <Text>Simple example: left and right buttons</Text>
          </SwipeAction>
        </View>
    )
}

const CheckboxItem = Checkbox.CheckboxItem;
Used.navigationOptions = ({ navigation }) => {
  return {
    title: '最近使用',
    // headerTransitionPreset: 'center',
    headerRight: (
        <TouchableOpacity 
          onPress={() => navigation.navigate('Search')}
        >   
            <View style={{paddingHorizontal: 16}}>
                <Icon 
                    name='search'
                    color={COLOR.MAIN}
                    size={24}
                />
            </View>
        </TouchableOpacity>
      ),

    headerLeft: (
        <View style={{
          paddingHorizontal: 16
        }}>

        </View>
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
        elevation: 2 // 去除阴影
    }
 }
};


const UsedNavigator = createStackNavigator(
  {
    Used: createStackNavigator(
        {
            Used: Used,
        },
      ),
      Search: Search
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

UsedNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


export default UsedNavigator