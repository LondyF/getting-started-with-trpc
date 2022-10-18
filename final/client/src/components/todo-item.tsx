import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { Todo } from '../../../server/src/models/todo';

type Props = {
  todo: Todo;
  onMarkTodo: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onMarkTodo, onDeleteTodo }) => {
  const handlePress = () => {
    onMarkTodo(todo);
  };

  const handlelongPress = () => {
    onDeleteTodo(todo);
  };

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handlelongPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.innerContainer}>
        <View
          style={[styles.checkbox, todo.completed && styles.checkboxCompleted]}>
          <Text style={styles.icon}>✓</Text>
        </View>
        <Text style={[styles.todo, todo.completed && styles.todoCompleted]}>
          {todo.title}
        </Text>
      </View>
      <View style={styles.hr} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderWidth: 2,
    height: 20,
    width: 20,
    borderRadius: 3,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#645bb4',
    borderColor: '#645bb4',
  },
  container: {
    marginVertical: 12,
  },
  hr: {
    height: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 25,
  },
  icon: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todo: {
    fontWeight: '800',
  },
  todoCompleted: {
    color: '#645bb4',
    textDecorationLine: 'line-through',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default TodoItem;
