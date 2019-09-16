import React from 'react';
import { StatusBar } from 'react-native'
import { createAppContainer } from 'react-navigation';

import TabNavigator from './RootScene'



const AppContainer = createAppContainer(TabNavigator);


const App = () => {
    return (
        <>
            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false}  //是否隐藏状态栏。
                backgroundColor={'#fff'} //状态栏的背景色
                barStyle="dark-content"
                color='red'
            />
            <AppContainer />
        </>
    )
}


export default App