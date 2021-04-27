import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './StyleShortcut.scss';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';
import Scrences from './Scrences';
function MainShortcutOfCanh({navigation}: {navigation: any}) {
  return (
    <View style={styles.mainChinh}>
      <ImageBackground
        source={require('../../image/1999.jpg')}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#2E499C', '#00C7CC']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={styles.fontHeader}>Chọn cảnh</Text>
              </LinearTextGradient>
            </View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.rightHeader}>
              <Icon style={styles.iconHeader} name={'times'} size={30} />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.body}>
            <View>
              <Scrences nameMain={'Cảnh 1'} />
              <Scrences nameMain={'Cảnh 2'} />
              <Scrences nameMain={'Cảnh 3'} />
              <Scrences nameMain={'Cảnh 1'} />
              <Scrences nameMain={'Cảnh 2'} />
              <Scrences nameMain={'Cảnh 3'} />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainShortcutOfCanh;
