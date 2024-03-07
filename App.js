import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (taskText) => {
        if (!tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
            return true;
        }
        return false;
    };

    return (
        <SafeAreaView>
           <Text style={styles.title}>ToDo App</Text>
           <ToDoForm addTask={addTask}/> 
           <ToDoList tasks={tasks}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
    },
    container: {
        flex: 1,
        backgroundColor: '#e8eaf6', 
        padding: 20,
    },
});

export default App;