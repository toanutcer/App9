import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

function Test(props) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            justifyContent: 'center',
            width: 70,
            height: 70,
            borderRadius: 35,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
            backgroundColor: '#fff',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'blue'}}>
              KH
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            paddingLeft: 20,
            paddingTop: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            Đây là dòng trên
          </Text>
          <Text
            style={{
              color: 'red',
            }}>
            Đây là dòng dưới
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 25,
          backgroundColor: 'white',
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}>
        <View style={{flex: 1}}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Chưa có thiết bị
            </Text>
          </LinearTextGradient>
          <Text
            style={{
              fontSize: 10,
              fontStyle: 'italic',
            }}>
            10 phòng - 0 thiết bị
          </Text>
        </View>
        <View
          style={{
            width: 50,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <FontAwesome5Icon name={'caret-right'} size={30} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Test;
