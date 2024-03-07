import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button  } from 'react-native';          

function ToDoList({ tasks }) {
  return (
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    task: {
      padding: 20,
      backgroundColor: '#c5cae9', // light blue
      marginVertical: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    taskText: {
      fontSize: 18,
      color: '#333',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
});

export default ToDoList;