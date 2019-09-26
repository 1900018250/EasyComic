import React from 'react'
import { useState, useEffect } from 'react'
import { Text, Image, View, Dimensions, ScrollView, ImageBackground, Alert } from 'react-native'
import styled from 'styled-components/native'

import LoadImage from '../../widget/LoadImage'


const FindRecommend = () => {
    const Warp = styled.ScrollView`
        marginVertical: 8;
    `
    const Box = styled.View`
        flex: 1;
        paddingHorizontal: 16;
        paddingBottom: 16;
        paddingTop: 0;
    `
    const Title = styled.Text`
        marginTop: 4;
        fontSize: 15;
        fontWeight: bold;
    `

    // 为您推荐列表
    const [recommendList, setrecommendList] = useState([{
        uri: '',
        title: ''
    }])

    useEffect(() => {

    }, [])

    const devWidth = parseInt(Dimensions.get('window').width) - 32    // 图片在当前设备显示的宽度
    const devHeight = parseInt(201/360 * devWidth)
    
    return (
        <Warp>
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http://i0.hdslb.com/bfs/manga-static/b127823173a025ae6b7a69d25f32225440c15510.png@568w_319h.png'}
                    />

                <Title>明日酱的水手服</Title>
            </Box>  
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http://i0.hdslb.com/bfs/manga-static/9f4ec01a47e13cc263cd0c5a9b9cbcadf7ae5fde.jpg@568w_319h.jpg'}
                    />

                <Title>citrus</Title>
            </Box> 
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http://i0.hdslb.com/bfs/manga-static/01deaa68eac69d61326638a554db3c944e69b3ce.png@568w_319h.png'}
                    />

                <Title>我们无法一起学习</Title>
            </Box> 
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http://i0.hdslb.com/bfs/manga-static/4a5437b0c873cd9ed465693d7ecf13bf4ad0859e.png@568w_319h.png'}
                    />

                <Title>你遭难了吗？</Title>
            </Box> 
            <Box>
                <LoadImage 
                    width={devWidth}
                    height={devHeight} 
                    uri={'http://i0.hdslb.com/bfs/manga-static/15e677bd4f297378ab8e9fc857e62a64f8c73e2a.png@568w_319h.png'}
                    />

                <Title>大小姐与七忠犬</Title>
            </Box> 
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http://i0.hdslb.com/bfs/manga-static/f432e9fac27b59ee99628d1719525adebf0a92f5.png@68_3.png'}
                    />

                <Title>小魔头暴露拉！</Title>
            </Box> 
            <Box>
                <LoadImage 
                    width={devWidth} 
                    height={devHeight}
                    uri={'http//i0.hdslb.com/bfs/manga-static/f432e9fac27b59ee99628d1719525adebf0a92f5.png@68_3.png'}
                    />

                <Title>test test test！</Title>
            </Box> 
  
        </Warp>
    )
}

export default FindRecommend
