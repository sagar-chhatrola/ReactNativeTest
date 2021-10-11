import React, { useState } from 'react';
import {StyleSheet,SafeAreaView,View,FlatList} from 'react-native';
import SearchInput from '../../../src/components/Common/SearchInput';
import {  MARGIN_H } from '../../../src/config/theme';
import { tvShowApi } from './../../services/show'
import ActivityLoader from '../../../src/components/Common/ActivityLoader';
import UserDetailComponent from '../../../src/components/Show/UserDetailComponent';
import NoDataFoundComponent from '../../../src/components/Common/NoDataFoundComponent';

const PeopleSearchScreen = () =>{
    
    const [searchKeyword, setSearchKeyword] = useState('')
    const { data, isFetching } = tvShowApi.endpoints.searchPeopleByName.useQuery(searchKeyword)
    
    
    if(isFetching){
        return <ActivityLoader visible={true}/>
    }

    return <SafeAreaView style={styles.mainContainerStyle}>
                <View style={styles.containerStyle}>
                    <SearchInput onBlur={(value:string)=>{setSearchKeyword(value)}}
                                 placeholder="Search People" />
                    
                    <FlatList data={data}
                              style={{marginBottom:60}}
                              renderItem={({item})=>
                                <UserDetailComponent  name={item.person.name}
                                                      link={item.person.url}
                                                      image={item.person?.image?.medium}
                                                      country={item.person?.country?.name}
                                                      birthday={item.person.birthday}
                              />}
                              ListEmptyComponent={()=><NoDataFoundComponent title="No people found"/>}
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

export default PeopleSearchScreen