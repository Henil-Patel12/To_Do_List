import React, { useState } from "react";
import { SafeAreaView, StyleSheet,Pressable, View, Text, ScrollView, TextInput, Button, Alert  } from 'react-native';          

function ToDoForm({ addTask }){
    const [taskText, setTaskText] = useState('');

    const handleSubmit = () => {
        if (addTask(taskText)) {
            setTaskText('');
        } else {
            Alert.alert('Error', 'This task is already added to the list');
        }
    };

    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task" onPress={handleSubmit} />
        </View>
    );
}
const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 5,
    },
});
export default ToDoForm;