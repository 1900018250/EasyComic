import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import PropTypes from 'prop-types'


// 图片加载组件
LoadImage = ({uri, width, height, loadText, errText}) => {
    const LoadImageBackgourd = styled.ImageBackground`
        width: ${width};
        height: ${height};
        backgroundColor: 'rgb(227,227,227)';
        justifyContent: center;
        alignItems: center;
        borderRadius: 4;
    `
    const LoadTextBox = styled.Text`
        color: 'rgb(168,168,168)';
        fontSize: 15;
        fontWeight: bold;
    `
    const [loadType, setloadType] = useState(0) // 加载状态

    // 根据加载状态显示状态
    const _loadText = (loadType) => {
        if (loadType === 0) {
            return loadText
        } else if (loadType === 2) {
            return errText
        } 
        return  // 成功后不显示
    }

    return (
        <LoadImageBackgourd 
            imageStyle={{ borderRadius: 4 }}
            source={{uri: uri}}
            onLoad={() => setloadType(1)}
            onError={(error) => setloadType(2)}
        >
            <LoadTextBox>{_loadText(loadType)}</LoadTextBox>
        </LoadImageBackgourd>
    )
}


LoadImage.propTypes = {
    uri:PropTypes.string.isRequired,    // 加载图片的地址
    width: PropTypes.number.isRequired,     // 图片在设备上显示的实际宽度
    height: PropTypes.number.isRequired,     // 图片在设备上显示的实际高度
    loadText: PropTypes.string,    // 加载时候显示的问题
    errText: PropTypes.string,     // 加载错误的文字
}

LoadImage.defaultProps = {
    loadText: '加载中',
    errText: '加载失败'
}


export default LoadImage