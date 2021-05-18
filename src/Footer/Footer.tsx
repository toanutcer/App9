import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../Footer/Footer.scss';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {LinearTextGradient} from 'react-native-text-gradient';

// @ts-ignore
function Footer({navigation, isActive, onClick}) {
  return (
    <View style={styles.footer}>
      {isActive === 'Home' ? (
        <TouchableOpacity onPress={() => onClick('Home')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2E499C', '#00C7CC']}
            style={isActive === 'Home' ? styles.footerHome : ''}>
            <Icon name="home" size={30} color="white" />
            <Text style={{marginLeft: 10, fontWeight: 'bold', color: 'white'}}>
              Home
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon2 name="home-outline" size={30} />
          </LinearTextGradient>
        </TouchableOpacity>
      )}
      {isActive === 'Play' ? (
        <TouchableOpacity onPress={() => onClick('Play')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2E499C', '#00C7CC']}
            style={isActive === 'Play' ? styles.footerHome : ''}>
            <Icon name="play-circle" size={30} color="white" />
            <Text style={{marginLeft: 10, fontWeight: 'bold', color: 'white'}}>
              Auto
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Play')}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon1 name="play-circle" size={30} />
          </LinearTextGradient>
        </TouchableOpacity>
      )}
      {isActive === 'Profile' ? (
        <TouchableOpacity onPress={() => onClick('Profile')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2E499C', '#00C7CC']}
            style={isActive === 'Profile' ? styles.footerHome : ''}>
            <Icon name="user" size={30} color="white" />
            <Text style={{marginLeft: 10, fontWeight: 'bold', color: 'white'}}>
              Profile
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon name="user-o" size={30} />
          </LinearTextGradient>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Footer;
