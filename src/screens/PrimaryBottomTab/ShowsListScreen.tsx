import React from 'react';
import {SafeAreaView, View, StyleSheet,FlatList} from 'react-native';
import { tvShowApi } from '../../../src/services/show';
import ShowDetailsComponent from '../../../src/components/Show/ShowDetailsComponent';
import {  MARGIN_H } from '../../../src/config/theme';
import ActivityLoader from '../../../src/components/Common/ActivityLoader';
import NoDataFoundComponent from '../../../src/components/Common/NoDataFoundComponent';

const ShowsListScreen = () =>{
    const { data, isFetching } = tvShowApi.endpoints.getTvShowByPage.useQuery(1)

    if(isFetching){
        return <ActivityLoader visible={true}/>
    }

    return <SafeAreaView style={styles.mainContainerStyle}>
                <View style={styles.containerStyle}>
                    <FlatList data={data}
                              style={{marginBottom:10}} 
                              renderItem={({item})=>
                                <ShowDetailsComponent name={item.name}
                                                      link={item.url}
                                                      language={item.language}
                              />}
                              ListEmptyComponent={()=><NoDataFoundComponent title="No shows found"/>}
                    />
                </View>
           </SafeAreaView>
}

export default ShowsListScreen

const styles = StyleSheet.create({
    mainContainerStyle:{
        flex:1,
        backgroundColor:'#FFF'
    },
    containerStyle :{
        marginHorizontal: MARGIN_H,
    } 
})