import React from 'react';
import {
  ActivityIndicator, Modal, StyleSheet, View,
} from 'react-native';
import { colors } from '../../config/theme';

const ActivityLoader = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <Modal
      visible={true}
      transparent={true}
      statusBarTranslucent
      >
      <View style={style.containerStyle}>
        <View style={style.indicatorViewStyle}>
          <ActivityIndicator size={'large'} color={colors.black} />
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  indicatorViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 50,
    width: 50,
  },
});

export default ActivityLoader;
