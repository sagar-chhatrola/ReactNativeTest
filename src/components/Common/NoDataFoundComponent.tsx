import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface NoDataProps {
    title: string
}

const NoDataFoundComponent = (props:NoDataProps) =>{
    return  <View style={styles.containerStyle}>                
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
}

export default NoDataFoundComponent

const styles = StyleSheet.create({
    containerStyle :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold'
    }
})