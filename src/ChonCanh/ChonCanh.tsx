import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.scss';
import Status from './Status';
import MQTT from '../../MQTT';
import {StackScreenProps} from '@react-navigation/stack';
import {useGlobal} from 'reactn';
function ChonCanh({navigation}: StackScreenProps<any>) {
  const [address] = useGlobal<any>('address');
  const [isActive1, setisActive1] = useState<string>();

  const [isActive2, setisActive2] = useState<string>();

  const [isActive3, setisActive3] = useState<string>();

  const onClickZone1 = useCallback(
    (s: string) => {
      if (s === 'off') {
        const data = {
          CMD: 'DEVICE',
          DATA: {
            DEVICE_ID: '',
            PROPERTIES: [
              {
                ID: 1,
                VALUE: 0,
              },
            ],
          },
        };
        MQTT(data, address);
        setisActive1('off');
      } else if (s === 'Nightlight') {
        const data = {
          CMD: 'DEVICE',
          DATA: {
            DEVICE_ID: '',
            PROPERTIES: [
              {
                ID: 2,
                VALUE: 1,
              },
            ],
          },
        };
        MQTT(data, address);
        setisActive1('Nightlight');
      } else if (s === 'Dimmed') {
        const data = {
          CMD: 'DEVICE',
          DATA: {
            DEVICE_ID: '',
            PROPERTIES: [
              {
                ID: 2,
                VALUE: 70,
              },
            ],
          },
        };
        MQTT(data, address);
        setisActive1('Dimmed');
      } else if (s === 'Bright') {
        const data = {
          CMD: 'DEVICE',
          DATA: {
            DEVICE_ID: '',
            PROPERTIES: [
              {
                ID: 2,
                VALUE: 100,
              },
            ],
          },
        };
        MQTT(data, address);
        setisActive1('Bright');
      }
    },
    [address],
  );
  const onClickZone2 = (s: string) => {
    if (s === 'off') {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 0,
              VALUE: 0,
            },
          ],
        },
      };
      MQTT(data, address);
      setisActive2('off');
    } else if (s === 'Nightlight') {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 2,
              VALUE: 1,
            },
          ],
        },
      };
      MQTT(data, address);
      setisActive2('Nightlight');
    } else if (s === 'Dimmed') {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 2,
              VALUE: 1,
            },
          ],
        },
      };
      MQTT(data, address);
      setisActive2('Dimmed');
    } else if (s === 'Bright') {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 2,
              VALUE: 70,
            },
          ],
        },
      };
      MQTT(data, address);
      setisActive2('Bright');
    }
  };
  const onClickZone3 = (s: string) => {
    if (s === 'spring') {
      setisActive3('spring');
    } else if (s === 'office') {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 2,
              VALUE: 100,
            },
          ],
        },
      };
      MQTT(data, address);
      setisActive3('office');
    } else if (s === 'tokyo') {
      setisActive3('tokyo');
    } else if (s === 'Summer') {
      setisActive3('Summer');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxHeader}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.textHeader}>Chọn cảnh</Text>
          </LinearTextGradient>
        </View>
        <View style={styles.itemHeader}>
          <Icon
            style={styles.iconClose}
            name="close-outline"
            size={40}
            onPress={() => navigation.navigate('Home')}
            color="red"
          />
        </View>
      </View>
      <Text style={styles.title}>Vùng 1</Text>
      <View style={{flex: 9, flexDirection: 'row'}}>
        <View style={{flex: 1, paddingRight: 5}}>
          <TouchableOpacity onPress={() => onClickZone1('off')}>
            <Status content="Tắt" uri="off" isActive={isActive1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone1('Nightlight')}>
            <Status
              content="Nightlight"
              uri="Nightlight"
              isActive={isActive1}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingLeft: 5}}>
          <TouchableOpacity onPress={() => onClickZone1('Bright')}>
            <Status content="Bright" uri="Bright" isActive={isActive1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone1('Dimmed')}>
            <Status content="Dimmed" uri="Dimmed" isActive={isActive1} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Phòng ngủ</Text>
      <View style={{flex: 9, flexDirection: 'row'}}>
        <View style={{flex: 1, paddingRight: 5}}>
          <TouchableOpacity onPress={() => onClickZone2('off')}>
            <Status content="Tắt" uri="off" isActive={isActive2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone2('Nightlight')}>
            <Status
              content="Nightlight"
              uri="Nightlight"
              isActive={isActive2}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingLeft: 5}}>
          <TouchableOpacity onPress={() => onClickZone2('Bright')}>
            <Status content="Bright" uri="Bright" isActive={isActive2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone2('Dimmed')}>
            <Status content="Dimmed" uri="Dimmed" isActive={isActive2} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Phòng khách</Text>
      <View style={{flex: 9, flexDirection: 'row'}}>
        <View style={{flex: 1, paddingRight: 5}}>
          <TouchableOpacity onPress={() => onClickZone3('spring')}>
            <Status content="Spring" uri="spring" isActive={isActive3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone3('tokyo')}>
            <Status content="Tokyo" uri="tokyo" isActive={isActive3} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingLeft: 5}}>
          <TouchableOpacity onPress={() => onClickZone3('office')}>
            <Status content="Office" uri="office" isActive={isActive3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onClickZone3('Summer')}>
            <Status content="Golden Summer" uri="Summer" isActive={isActive3} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ChonCanh;
