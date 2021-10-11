import React, { useState } from 'react';
import {StyleSheet,SafeAreaView,View,FlatList} from 'react-native';
import ShowDetailsComponent from '../../../src/components/Show/ShowDetailsComponent';
import SearchInput from '../../../src/components/Common/SearchInput';
import { colors, MARGIN_H } from '../../../src/config/theme';
import { tvShowApi } from './../../services/show'
import ActivityLoader from '../../../src/components/Common/ActivityLoader';
import NoDataFoundComponent from '../../../src/components/Common/NoDataFoundComponent';

const ShowSearchScreen = () =>{
    
    const [searchKeyword, setSearchKeyword] = useState('')
    const { data, isFetching } = tvShowApi.endpoints.searchShowByName.useQuery(searchKeyword)
    
    
    if(isFetching){
        return <ActivityLoader visible={true}/>
    }

    return <SafeAreaView style={styles.mainContainerStyle}>
                <View style={styles.containerStyle}>
                    <SearchInput onBlur={(value:string)=>{setSearchKeyword(value)}}
                                 placeholder="Search show" />
                    <FlatList data={data}
                              style={{marginBottom:60}}
                              renderItem={({item})=>
                                <ShowDetailsComponent name={item.show.name}
                                                      link={item.show.url}
                                                      language={item.show.language}
                              />}
                              ListEmptyComponent={()=><NoDataFoundComponent title="No shows found"/>}
                    />
                </View>
           </SafeAreaView>
        
}

const styles = StyleSheet.create({
    mainContainerStyle:{
        flex:1,
        backgroundColor:'#FFF'
    },
    containerStyle :{
        marginHorizontal: MARGIN_H,

    } 
})

export default ShowSearchScreen