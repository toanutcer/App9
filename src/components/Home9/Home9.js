import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../css/Home9.scss';
import Header from '../Header/Header';
import Room from './Room/Room';
import Area from './Area/Area';
import Footer from '../Footer/Footer';
import styless from './Categories/Category.scss';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Action from '../Home10/Action';
import Users from './Users/Users';
import _TextGradient from '../DungLienTungTuc/LinearTextGradient/LinearTextGradient';
import {LinearTextGradient} from 'react-native-text-gradient';
const Stack = createStackNavigator();

function Home9({navigation}) {
  const [category, setCategory] = React.useState('1');
  return (
    <ImageBackground source={require('../../image/1999.jpg')} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Header navigation={navigation} />
        </View>

        <View style={styles.Main}>
          <View style={styless.categories}>
            <LinearTextGradient
              style={[styless.textCategoryChoosen, styless.textCategory]}
              colors={['#2E499C', '#00C7CC']}
            />
            <TouchableOpacity
              onPress={() => {
                setCategory('1');
              }}>
              <_TextGradient text={'Phòng đồ chơi'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setCategory('2');
              }}>
              <Text style={styless.textCategory}>Phòng khách</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory('3');
              }}>
              <Text style={styless.textCategory}>Phòng net</Text>
            </TouchableOpacity>
          </View>
          {category === '1' ? (
            <View style={{flex: 1}}>
              <Users navigation={navigation} />
              <Room />
              <Area />
            </View>
          ) : category === '2' ? (
            <View>
              <Action text={'Phong bep'} iconName={'home'} />
            </View>
          ) : (
            <View>
              <Action text={'Phong khach'} iconName={'home'} />
            </View>
          )}
        </View>
        <View style={styles.Footer}>
          <Footer />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Home9;
