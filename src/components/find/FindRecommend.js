import React from 'react'
import { Text, Image, View, Dimensions, ScrollView } from 'react-native'

// import ''
const getImageSize = () => {
    Image.getSize('../../img/1.jpeg', (width,height) => {
        console.log(width) 
        }
     )
}

const FindRecommend = () => {
    console.log(Dimensions.get('window').width)

    return (
        <>
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    padding: 16,
                    paddingBottom: 0,
                    paddingTop: 8,
                }}
            >
                <Image 
                    source={require('../../img/1.jpeg')} 
                    style={{
                        // flex: 1,
                        width: Dimensions.get('window').width-32,
                        height: 201 * (Dimensions.get('window').width-32)/360 ,
                        borderRadius: 4
                    }}
                    />
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >转生成为了只有乙女游戏破灭flag的邪恶大小姐</Text>
                </View>  
                <View
                style={{
                    flex: 1,
                    padding: 16,
                    paddingBottom: 0,
                }}
            >
                <Image 
                    source={require('../../img/1.jpeg')} 
                    style={{
                        width: Dimensions.get('window').width-32,
                        height: 201 * (Dimensions.get('window').width-32)/360 ,
                        borderRadius: 4
                    }}
                    />
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >转生成为了只有乙女游戏破灭flag的邪恶大小姐</Text>
                </View>  
                <View
                style={{
                    flex: 1,
                    padding: 16,
                    paddingBottom: 0,
                }}
            >
                <Image 
                    source={require('../../img/1.jpeg')} 
                    style={{
                        // flex: 1,
                        width: Dimensions.get('window').width-32,
                        height: 201 * (Dimensions.get('window').width-32)/360 ,
                        borderRadius: 4
                    }}
                    />
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >转生成为了只有乙女游戏破灭flag的邪恶大小姐</Text>
                </View>     
                <View
                style={{
                    flex: 1,
                    padding: 16,
                    paddingBottom: 0,
                }}
            >
                <Image 
                    source={require('../../img/1.jpeg')} 
                    style={{
                        // flex: 1,
                        width: Dimensions.get('window').width-32,
                        height: 201 * (Dimensions.get('window').width-32)/360 ,
                        borderRadius: 4
                    }}
                    />
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >转生成为了只有乙女游戏破灭flag的邪恶大小姐</Text>
                </View>  
                <View
                style={{
                    flex: 1,
                    padding: 16,
                    paddingBottom: 0,
                }}
            >
                <Image 
                    source={require('../../img/1.jpeg')} 
                    style={{
                        // flex: 1,
                        width: Dimensions.get('window').width-32,
                        height: 201 * (Dimensions.get('window').width-32)/360 ,
                        borderRadius: 4
                    }}
                    />
                <Text
                    style={{
                        marginTop: 4,
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >转生成为了只有乙女游戏破灭flag的邪恶大小姐</Text>
                </View>                 
        </ScrollView>
        </>
    )
}




export default FindRecommend
