import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import TodoItem from './todo-item';

import { Todo } from '../../../server/src/models/todo';

type Props = {
  todos?: Todo[];
  onMarkTodo: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
};

const List: React.FC<Props> = ({ todos, onMarkTodo, onDeleteTodo }) => {
  const renderTodoItem: ListRenderItem<Todo> = ({ item }) => {
    return (
      <TodoItem
        todo={item}
        onMarkTodo={onMarkTodo}
        onDeleteTodo={onDeleteTodo}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={({ id }) => String(id)}
      contentContainerStyle={styles.container}
      data={todos}
      renderItem={renderTodoItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

export default List;
