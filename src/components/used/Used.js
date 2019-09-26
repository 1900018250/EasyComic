import React from 'react';
import { ScrollView, Text, View, TouchableOpacity,  StatusBar, Image } from 'react-native'
import { Tabs, Icon  } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { List, Popover, Checkbox, Button } from '@ant-design/react-native';
import styled from 'styled-components/native'

import Search from '../Search'
import { COLOR }  from '../../config'
import {  SwipeAction } from '@ant-design/react-native';


const Used = (props) => {
    const right = [
      {
        text: '删除',
        // onPress: () => console.log('delete'),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ]

    const data = [
        {
            img: require('../../img/11.jpeg'),
            title: '鬼灭之刃',
            progress: '看到29话/更新至109话',
            origin: 'bilibili',
            time: '2019-9-15 05.20',

        },
        {
            img: require('../../img/22.jpeg'),
            title: '租借女友',
            progress: '看到36/186话',
            origin: '腾讯',
            time: '2019-9-15 05.20',

        },
        {
            img: require('../../img/33.jpeg'),
            title: '我们无法一起学习',
            progress: '看到36/72话',
            origin: '爱奇艺',
            time: '2019-9-15 05.20',

        },
        {
            img: require('../../img/44.jpeg'),
            title: '禁止恋爱世界',
            progress: '看到3/141话',
            origin: 'bilibili',
            time: '2019-9-15 05.20',

        }
    ]

    return (
       <Warp>
          {data.map((item, index) => 
            <SwipeAction
              key={index}
              autoClose
              style={{ 
                backgroundColor: COLOR.BG_COLOR 
              }}
              right={right}
              onOpen={() => console.log('open')}
              onClose={() => console.log('close')}
            >
              <ContentBox >
                <ContentLeftBox>
                  <ContentImg
                    source={item.img}
                  ></ContentImg>

                  <ContentDec>
                    <View>
                    <ContentTitle>{item.title}</ContentTitle>
                      <ContentTopText>{item.progress}</ContentTopText>
                    </View>
                    <View>
                    <ContentText>来源: {item.origin}</ContentText>
                    <ContentText>{item.time}</ContentText>
                    </View>
                  </ContentDec>
                  
                </ContentLeftBox>
              
                <ContentRightBox>
                  <Button type="ghost"
                    activeStyle={false}
                    style={{
                      width: 80,
                      height: 26,
                      borderWidth: 0.8,
                    }}
                  >
                    <ContentButtonText>续看</ContentButtonText>
                  </Button>
                </ContentRightBox>
            </ContentBox>
          </SwipeAction>
          )}  
      </Warp>
    )
}


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
        elevation: 1 // 去除阴影
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

//  paddingVertical: 16;
const Warp = styled.View`
  flex: 1;
  paddingHorizontal: 16;
  marginTop: -5;
  backgroundColor: ${COLOR.BG_COLOR};
`

const ContentBox = styled.View`
  marginTop: 20;
  flexDirection: row;
  justifyContent: space-between;
`

const ContentLeftBox = styled.View`
  flexDirection: row;
`

const ContentImg = styled.Image`
  width: 60;
  height: ${138/104 * 60};
`

const ContentDec = styled.View`
  marginLeft: 15;
  flexDirection: column;
  justifyContent: space-between;
`

const ContentTitle = styled.Text`
  fontSize: 14;
  color: rgb(34,34,34);
  fontWeight: bold;
`

const ContentTopText = styled.Text`
  marginTop: 5;
  fontSize: 12;
  color: 'rgb(153,153,153)';
`

const ContentText = styled.Text`
  fontSize: 12;
  color: 'rgb(153,153,153)';
`

const ContentRightBox = styled.View`
  flexDirection: column-reverse;
  justifyContent: center;
`

const ContentButtonText = styled.Text`
  fontSize: 14
`
        //  {/* <TouchableOpacity
        //             style={{
        //               flexDirection: 'row',
        //               width: 80,
        //               height: 30,
        //               backgroundColor: 'pink',
        //               justifyContent: 'center',
        //               alignItems: 'center',
        //               borderRadius: 4,
        //               backgroundColor: COLOR.BG_COLOR,
        //               borderStyle: "solid",
        //               borderColor: COLOR.BG_COLOR,
        //               borderWidth: 1,
                      
        //             }}
        //           >
        //             <View>
        //               <Text
        //                 style={{
        //                   fontSize: 14,
        //                   color: COLOR.MAIN,
        //                 }}
        //               >续看</Text>
        //             </View>
        //           </TouchableOpacity> */}