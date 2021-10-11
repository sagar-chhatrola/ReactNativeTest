import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ErrorOptions {
    title: string
}

const ErrorComponent = (props:ErrorOptions) =>{
    return  <View style={styles.containerStyle}>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
}

export default ErrorComponent

const styles = StyleSheet.create({
    containerStyle :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold'
    }
})