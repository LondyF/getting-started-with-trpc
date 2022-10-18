import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  onPress: () => void;
};

const FloatingActionButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.addIcon}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 40,
    height: 50,
    backgroundColor: '#645bb4',
    borderRadius: 100,
    zIndex: 1,
  },
  addIcon: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  pressed: {
    opacity: 0.8,
  },
});

export default FloatingActionButton;
