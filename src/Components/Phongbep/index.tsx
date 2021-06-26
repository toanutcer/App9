import React from 'react';
import {View} from 'react-native';

import Panel from '../Panel';

function Phongbep() {
  return (
    <View style={{flex: 12, flexDirection: 'row'}}>
      <View style={{flex: 1, paddingRight: 5}}>
        <Panel icon="sunny-outline" content="Cảm biến ánh sáng 01" />
        <Panel icon="sunny-outline" content="Công tắc cảnh 01" />
      </View>
      <View style={{flex: 1, paddingLeft: 5}}>
        <Panel icon="sunny-outline" content="Chuyển động 01" />
      </View>
    </View>
  );
}

export default Phongbep;
