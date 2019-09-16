import React from 'react'
import { Alert, View } from 'react-native';
import { SearchBar } from '@ant-design/react-native';


const Search = (props) => {
    const clear = () => {
        props.navigation.goBack()
    }

    return (
        <View style={{ }}>
          <SearchBar
          //   value={this.state.value}
            placeholder="搜索"
            autoFocus={true}
          //   onSubmit={(value) => Alert.alert(value)}
            onCancel={clear}
            // onChange={this.onChange}
            showCancelButton
          />
        </View>
    )
}


export default Search