import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements'

import Colors from '../../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      type={props.type ? props.type : 'ionicon'}
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
