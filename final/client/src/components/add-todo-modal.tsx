import React from 'react';
import { View, Modal, StyleSheet, Text, TextInput } from 'react-native';

import Button from './button';

type Props = {
  onSubmit: (title: string) => void;
  onCancel: () => void;
  visible: boolean;
};

const AddTodoModal: React.FC<Props> = ({ visible, onSubmit, onCancel }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <View style={styles.backdrop}>
        <View style={styles.box}>
          <Text style={styles.title}>Enter Todo</Text>
          <TextInput onChangeText={setValue} style={styles.input} />
          <View style={styles.buttonContainer}>
            <Button onPress={onCancel} secondary title="Cancel" />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#00000095',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '800',
  },
});

export default AddTodoModal;
