import React from 'react';
import {Text, View, StyleSheet, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PADDING_H } from '../../config/theme';

interface ShowDetailsOptions {
    name: string,
    link: string,
    language: string
}

const ShowDetailsComponent = (props:ShowDetailsOptions) =>{
    return  <View style={styles.containerStyle}>
                <View style={styles.itemViewStyle}>
                    <Text style={styles.keyStyle}>Name: </Text>
                    <Text style={styles.valueStyle}>{props.name}</Text>
                </View>
                <View style={styles.itemViewStyle}>
                    <Text style={styles.keyStyle}>Link: </Text>
                    <TouchableOpacity onPress={()=>Linking.openURL(props.link)}>
                        <Text style={[styles.valueStyle,styles.linkStyle]}>{props.link}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemViewStyle}>
                    <Text style={styles.keyStyle}>Language: </Text>
                    <Text style={styles.valueStyle}>{props.language}</Text>
                </View>
            </View>
}

export default ShowDetailsComponent

const styles = StyleSheet.create({
    containerStyle :{
        paddingHorizontal: PADDING_H,
        paddingVertical: PADDING_H,
        borderRadius:2,
        borderWidth:1,
        marginTop:10
    },
    itemViewStyle:{
        flexDirection:'row',
        flex:1,
        flexWrap:'wrap'
    },
    keyStyle:{
        fontSize:15,
        fontWeight:'bold'
    },
    valueStyle:{
        fontSize:15,
        fontWeight:'normal'
    },
    linkStyle:{
        textDecorationLine:'underline'
    }
})