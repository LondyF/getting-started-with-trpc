import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  secondary?: boolean;
};

const Button: React.FC<Props> = ({ title, onPress, secondary = false }) => {
  return (
    <Pressable
      style={[styles.button, secondary && styles.buttonSecondary]}
      onPress={onPress}>
      <Text
        style={[styles.buttonText, secondary && styles.buttonTextSecondary]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#645bb4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flex: 1,
    borderRadius: 3,
    alignItems: 'center',
    marginRight: 5,
  },
  buttonSecondary: {
    backgroundColor: 'white',
    borderColor: '#645bb4',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#645bb4',
  },
});

export default Button;
