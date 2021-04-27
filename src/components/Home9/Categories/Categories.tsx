import styless from './Category.scss';
import {Text, View} from 'react-native';
import React from 'react';
import Category from './Category';
import {LinearTextGradient} from 'react-native-text-gradient';
function Categories() {
  return (
    <View style={styless.categories}>
      <LinearTextGradient
        style={[styless.textCategoryChoosen, styless.textCategory]}
        colors={['#2E499C', '#00C7CC']}>
        <Text>Phòng đồ chơi</Text>
      </LinearTextGradient>
      <Text style={styless.textCategory}>Phòng khách</Text>
      <Text style={styless.textCategory}>Phòng khách</Text>
    </View>
  );
}
export default Categories;
