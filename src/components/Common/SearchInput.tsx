import React, { useState } from 'react';
import {View, StyleSheet,TextInput} from 'react-native';

interface SerachInputProps {
    title: string
}

const SearchInput = (props:any) =>{
    const [value,setValue] = useState('')
    return  <View style={styles.containerStyle}>
                <TextInput style={styles.inputStyle} 
                           placeholder={props.placeholder}
                           value={value}
                           onChangeText={(text)=>setValue(text)}
                           onBlur={()=>props.onBlur(value)}/>
            </View>
}

export default SearchInput

const styles = StyleSheet.create({
    containerStyle :{
        height:45,
        borderRadius:20,
        justifyContent:'center',
        borderWidth:1,
        marginTop:10
    },
    inputStyle:{
        paddingVertical:0,
        paddingLeft:10
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold'
    }
})