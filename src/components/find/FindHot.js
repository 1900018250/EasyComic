import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { List, Popover } from '@ant-design/react-native'
import styled from 'styled-components/native'


const FindHot = () => {
  const hotList = [

  ]

  const Warp = styled.ScrollView`
    flex: 1;
    flexDirection: column;
    /*marginTop: 8;*/
    paddingHorizontal: 12;
    marginBottom: 8;
  `

  const Box = styled.View`
    flexDirection: row;
    marginTop: 15;
  `

  const MainBox = styled.View`
    flex: 1;
    marginTop: 7;
    flexDirection: row;
  `

  // 排名数字
  const RankNumer = () => {
    return (
      <Image 
          source={require('../../img/num/first.png')} 
          style={{
              marginRight: -8,
              width: 36.56,
              height: 60,
          }}
      />
    )
  }

  // 漫画主图
  const MianImage = () => {
    return (
      <Image 
        source={require('../../img/3.jpeg')} 
        style={{
            // flex: 1,
            marginRight: 10,
            width: 110,
            height: 146.66,
            borderRadius: 5
        }}
      />
    )
  }

  // 漫画简介
  const Brief = () => {
    return (
      <View
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >五等分的新娘</Text>
          <View
            style={{
              flexDirection: 'column-reverse',
              fontSize: 12,
              color: '#111'
            }}
          >
            <Text
              style={{
                marginTop: 3,
                color: '#999'
              }}
            >更新至 101 话</Text>
            <Text
              style={{
                marginTop: 3,
                color: '#999'
              }}
            >春场葱 讲谈社</Text>
            <Text
              style={{
                marginTop: 3,
                color: '#999'
              }}
            >恋爱 校园 后宫</Text>
        </View>
      </View>
    )
  }

  return (
    <Warp>
      <Box>
        <RankNumer />
          <MainBox>
          <MianImage/>
          <Brief />
          {/* <Text>11</Text> */}
        </MainBox>
      </Box>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
        }}
      >
        <Image 
          source={require('../../img/num/first.png')} 
          style={{
              marginRight: -8,
              width: 36.56,
              height: 60,
          }}
          />
        <View
          style={{
            flex: 1,
            marginTop: 7,
            flexDirection: 'row',
          }}
        >
          <Image 
            source={require('../../img/2.jpeg')} 
            style={{
                // flex: 1,
                marginRight: 10,
                width: 110,
                height: 146.66,
                borderRadius: 5
            }}
            />
            <View
              style={{
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}
              >五等分的新娘</Text>
              <View
                style={{
                  flexDirection: 'column-reverse',
                  fontSize: 12,
                  color: '#111'
                }}
              >
                <Text
                  style={{
                    marginTop: 3,
                    color: '#999'
                  }}
                >更新至 101 话</Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#999'
                  }}
                >春场葱 讲谈社</Text>
                <Text
                  style={{
                    marginTop: 3,
                    color: '#999'
                  }}
                >恋爱 校园 后宫</Text>
              </View>
            </View>
          </View>
      </View>
      <Box>
        <RankNumer />
          <MainBox>
          <MianImage/>
          <Brief />
          {/* <Text>11</Text> */}
        </MainBox>
      </Box>
      <Box>
        <RankNumer />
          <MainBox>
          <MianImage/>
          <Brief />
          {/* <Text>11</Text> */}
        </MainBox>
      </Box>              
       
    </Warp>

  )
}


export default FindHot