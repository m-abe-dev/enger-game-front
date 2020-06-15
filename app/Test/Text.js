import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class  MemoDetailScreen extends React.Component {
render (){
  return (
    <View>
        <View style={styles.memoHeader}>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text> 
          <Text style={styles.memoHeaderDate}>2017/12/12/</Text>
        </View>

        <View style={styles.memoContent}>
            <text>
                講座のアイデアです。
            </text>
        </View>

    </View>
  );
}
}