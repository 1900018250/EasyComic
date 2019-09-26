import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, Picker, Dimensions } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { createStackNavigator } from 'react-navigation-stack'
import styled from 'styled-components/native'

import LoadImage from '../../widget/LoadImage'
import Search from '../Search'
import { COLOR }  from '../../config'


const Collection = (props) => {
    const devWidth = parseInt((Dimensions.get('window').width - 40) / 3)    // 图片在当前设备显示的宽度
    const devHeight = parseInt(138/104 * devWidth)
    const ContentImg = styled.Image`
        width: ${devWidth};
        height: ${devHeight};
        borderRadius: 4;
    `
    const data = [
        {
            img: require('../../img/11.jpeg'),
            title: '鬼灭之刃',
            progress: '看到29/109话1',
            origin: 'bilibili',

        },
        {
            img: require('../../img/22.jpeg'),
            title: '租借女友',
            progress: '看到36/186话',
            origin: '腾讯',

        },
        {
            img: require('../../img/33.jpeg'),
            title: '我们无法一起学习',
            progress: '看到36/72话',
            origin: '爱奇艺',

        },
        {
            img: require('../../img/44.jpeg'),
            title: '禁止恋爱世界',
            progress: '看到3/141话',
            origin: 'bilibili',

        }
    ]

    return (
        <Warp>
            <TopBox>
                <TopPicker
                    // selectedValue={this.state.language}
                    // onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                >
                    <Picker.Item label="排序:名称" value="name" />
                    <Picker.Item label="排序:更新" value="update" />
                    <Picker.Item label="排序:阅读" value="read" />
                </TopPicker>
                {/* <TopText>4个漫画</TopText> */}
            </TopBox>
            <ContentWarp>
                {data.map((item, index) => 
                   <ContentBox
                    key={index}
                   >
                        <ContentImg
                            source={item.img}
                        >
                        </ContentImg>
                        <ContentTitle>{item.title}</ContentTitle>
                        <ContentBottom>
                            <ContentBottomText>{item.progress}</ContentBottomText>
                            <ContentBottomText>{item.origin}</ContentBottomText>
                        </ContentBottom>  
                   </ContentBox> 
                )}            
            </ContentWarp>
        </Warp>
    )
}

Collection.navigationOptions = ({ navigation }) => {
  return {
    title: '收藏',
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
            <View style={{paddingHorizontal: 16}}>
                <Text
                style={{
                    fontSize: 15,  
                    color:COLOR.MAIN
                }}
                >
                    编辑
                </Text>
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
        elevation: 2 // 去除阴影
    }
 }
};


const CollectionNavigator = createStackNavigator(
  {
    Collection: createStackNavigator(
        {
            Collection: Collection,
        },
      ),
      Search: Search
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)


CollectionNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


export default CollectionNavigator


const Warp = styled.View`
    flex: 1;
    paddingHorizontal: 10;
    paddingVertical: 10;
    backgroundColor: '${COLOR.BG_COLOR}';
`

const TopBox = styled.View`
    paddingHorizontal: 3;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`

const TopPicker = styled.Picker`
    height: 20;
    width: 150;
    marginLeft: -14;
    color: ${COLOR.MAIN};
    backgroundColor: '${COLOR.BG_COLOR}';
    transform: scaleX(.9) scaleY(.9);
`

const TopText = styled.Text`
    fontSize: 14;
    color: 'rgb(34,34,34)';
`

const ContentWarp = styled.View`
    flex: 1;
    flexDirection: row;
    justifyContent: space-between;
    flexWrap: wrap;
    marginTop: 0;
`

const ContentBox = styled.View`
    marginTop: 20;
`

const ContentTitle = styled.Text`
    color: 'rgb(34,34,34)';
    marginTop: 5;
    fontSize: 14;
`

const ContentBottom = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginTop: 3;
`

const ContentBottomText = styled.Text`
    fontSize: 12;
    color: 'rgb(153,153,153)';
`