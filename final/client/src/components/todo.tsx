import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { Todo as TodoType } from '../../../server/src/models/todo';

import useDeleteTodoMutation from '../hooks/use-delete-todo-mutation';
import useUpdateTodoMutation from '../hooks/use-update-todo-mutation';
import useTodosQuery from '../hooks/use-todos-query';
import useAddTodoMutation from '../hooks/use-add-todo-mutation';

import List from './list';
import FloatingActionButton from './floating-action-button';
import AddTodoModal from './add-todo-modal';

const Todo: React.FC = () => {
  const [isAddTodoModalVisble, setIsAddTodoModalOpen] = React.useState(false);

  const { data } = useTodosQuery();

  const addTodoMutation = useAddTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleMarkTodo = ({ id, completed }: TodoType) => {
    updateTodoMutation.mutate({
      id,
      completed: !completed,
    });
  };

  const handleDeleteTodo = ({ id }: TodoType) => {
    deleteTodoMutation.mutate({ id });
  };

  const handleAddTodo = (title: string) => {
    addTodoMutation.mutate({ title });

    // Close our modal
    setIsAddTodoModalOpen(false);
  };

  const handleOpenAddTodoModal = () => {
    setIsAddTodoModalOpen(true);
  };

  const handleCancelAddTodo = () => {
    setIsAddTodoModalOpen(false);
  };

  const todosCompletedCount = data?.filter(x => x.completed).length;

  const todosCount = data?.length;

  return (
    <>
      <AddTodoModal
        visible={isAddTodoModalVisble}
        onSubmit={handleAddTodo}
        onCancel={handleCancelAddTodo}
      />
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <FloatingActionButton onPress={handleOpenAddTodoModal} />
          <Text style={styles.title}>My Todos</Text>
          <Text style={styles.subTitle}>
            {todosCompletedCount} out of {todosCount} todos completed
          </Text>
          <View style={styles.hr} />
          <List
            todos={data}
            onMarkTodo={handleMarkTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingTop: 50,
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: 8,
    fontWeight: '500',
    fontSize: 12,
    color: '#a3a3a3',
  },
  hr: {
    height: 3,
    backgroundColor: '#e8e8e8',
    marginTop: 30,
  },
});

export default Todo;
