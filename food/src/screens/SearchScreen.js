import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => { 
  
  const[term, setTerm] = useState();
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter( (result) => {
        return result.price === price;
        }
    );
  };

  //  return <View style={{ flex: 1 }}>
    return <>
     <SearchBar
        term = { term } 
        onTermChange = { setTerm}
        onTermSubmit= { () => searchApi(term) }
        ></SearchBar>
     { errorMessage ? <Text>{errorMessage}</Text> : null }
     <ScrollView>
        <ResultsList title="Cost effective"
                    results={ filterResultsByPrice('$') }
                    />
        <ResultsList title="Bit pricier"
                      results={ filterResultsByPrice('$$')}
                      />
        <ResultsList title="Big spender"
                      results={ filterResultsByPrice('$$$')}
                      />
      </ScrollView>
    {/* </View> */}
    </>
};

const styles = StyleSheet.create({
    
});
export default SearchScreen;