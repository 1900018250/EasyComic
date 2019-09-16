import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, Button } from 'react-native'
import PropTypes from 'prop-types'


const FindTabs = (props) => {
      return (
        <View
            style={{
                height: 33,
                paddingHorizontal: 16,
                paddingBottom: 8,
                backgroundColor: 'rgb(255, 255, 255)',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        {props.tabProps.tabs.map((tab, i) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={tab.key || i}
            style={{
              flex: 1,
            }}
            onPress={() => {
              const { goToTab, onTabClick } = props.tabProps;
              onTabClick && onTabClick(tabs[i], i);
              goToTab && goToTab(i);
            }}
          >
            <View
              style={{ 
                flex: 1, 
                height:15,
                justifyContent: 'center',
                alignItems: 'center', 
                borderWidth: 1,
                borderColor: 'rgb(78,154,248)',
                borderRightWidth: i == 2 ? 1 : 0,
                borderTopLeftRadius: i == 0 ? 5: 0,
                borderTopRightRadius: i == 2 ? 5: 0,
                borderBottomLeftRadius: i == 0 ? 5 : 0,
                borderBottomRightRadius: i == 2 ? 5 : 0,
                backgroundColor: props.tabProps.activeTab === i ? 'rgb(78,154,248)' : undefined,
              }}
            >
              <Text 
                style={{
                  color: props.tabProps.activeTab === i ? '#fff' : 'rgb(78,154,248)',
                  fontSize: 12,
                }}
              >{tab.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
}


FindTabs.propTypes = {
    tabProps: PropTypes.shape({
        activeTab: PropTypes.number.isRequired,     // ant tabs组件 当时激活状态
    })
}


export default FindTabs