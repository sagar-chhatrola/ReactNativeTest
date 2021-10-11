import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import ActivityLoader from './../../../src/components/Common/ActivityLoader';
import { WEB_PAGE_URL } from './../../config/constant';

const WebPageScreen = () =>{
    const [loading,setLoading] = useState(true)
    return <SafeAreaView style={{flex:1}}>
                <WebView source={{uri: WEB_PAGE_URL}}
                         onLoadEnd={()=>setLoading(false)}
                         onLoadStart={()=>setLoading(true)}
                         startInLoadingState={loading}
                         renderLoading={()=><ActivityLoader visible={loading}/>}
                         />
           </SafeAreaView>
}

export default WebPageScreen