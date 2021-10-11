import React from 'react';
import {Text, View, StyleSheet, Linking,Image} from 'react-native';
import { colors, PADDING_H } from '../../config/theme';

interface UserDetailsOptions {
    name: string,
    link: string
    country: any
    image?: string
    birthday: string
}

const UserDetailComponent = (props:UserDetailsOptions) =>{
    return  <View style={styles.containerStyle}>
                <View style={styles.itemViewStyle}>
                    <View style={styles.profilePicContainer}>
                        <Image source={{uri:props?.image}} style={styles.profilePicStyle} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.valueStyle}>{props?.name}</Text>
                        {props?.birthday && <Text style={styles.valueStyle}>{props?.birthday}</Text>}
                        {props?.country && <Text style={styles.valueStyle}>{props?.country}</Text>}
                        {props?.link && <Text onPress={()=>Linking.openURL(props.link)} style={styles.linkStyle}>{props?.link}</Text>}
                    </View>
                </View>
                
            </View>
}

export default UserDetailComponent

const styles = StyleSheet.create({
    containerStyle :{
        paddingHorizontal: PADDING_H,
        paddingVertical: PADDING_H,
        borderRadius:2,
        borderWidth:1,
        marginTop:10
    },
    itemViewStyle:{
        flexDirection:'row'
    },
    profilePicContainer:{
        flex:1.5
    },
    infoContainer:{
        flex: 8.5
    },
    valueStyle:{
        fontSize:15,
        fontWeight:'normal',   
    },
    profilePicStyle:{
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: colors.black,
    },
    linkStyle:{
        textDecorationLine:'underline'
    }
})