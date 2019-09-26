import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, Button, StatusBar } from 'react-native'
import { Tabs, Icon  } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { List, Popover, Checkbox } from '@ant-design/react-native';

import { COLOR }  from '../../config'
import FindTabs from './FindTabs'
import FIndRecommend from './FindRecommend'
import FindHot from './FindHot'
import Search from '../Search'


const Find = (props) => {
  const tabs = [
      { title: '为您' },
      { title: '热搜' },
      { title: '最新' },
    ]

    return (
      <>
        <View style={{ flex: 1, 
          backgroundColor: COLOR.BG
        }}>
          <Tabs
            tabs={tabs}
            renderTabBar={tabProps => (
              <FindTabs tabProps={tabProps}/>
            )}
          >
            <FIndRecommend />
            <FindHot />
            <FIndRecommend />
          </Tabs>
        </View>
      </>
    )
}


const CheckboxItem = Checkbox.CheckboxItem;
Find.navigationOptions = ({ navigation }) => {
  return {
    title: '发现',
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
        <TouchableOpacity 
        >   
        <View 
          style={{
            paddingLeft: 20,
          }}>
          <Popover
            overlay={
              <Popover.Item>
                <View 
                  style={{
                    width: 250,
                    flexDirection: 'column',
                  }}
                >
                  <View style={{ 
                      flex: 1,
                      alignItems: 'center'
                   }}>
                    <Text style={{  }}>选择需要的漫画源</Text>
                  </View>
                  
                  <List style={{ marginTop: 8 }}>
                    
                    <CheckboxItem
                      // checked={true}
                      // onChange={event => {
                        
                      // }}
                    >
                      bilibili漫画
                    </CheckboxItem>
                    <CheckboxItem>腾讯漫画</CheckboxItem>
                    <CheckboxItem>爱奇艺漫画</CheckboxItem>
                  </List>
                </View>
              </Popover.Item>
            }
            placement={'bottom'}
          >
            <Text
              style={{
                fontSize: 15,  
                color:COLOR.MAIN
              }}
            >
              来源
            </Text>
          </Popover>
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
        elevation: 0 // 去除阴影
    }
 }
}


const FindNavigator = createStackNavigator(
  {
      Find: createStackNavigator(
        {
            Find: Find,
        },
      ),
      Search: Search
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

FindNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


export default FindNavigator
