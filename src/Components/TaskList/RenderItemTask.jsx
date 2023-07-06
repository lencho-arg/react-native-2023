import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({ item, onPressTask }) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={
                item.completed ? styles.taskCompleted : styles.task
            }
                key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: '100%',
        backgroundColor: "azure",
        padding: 10,
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
    },
    taskCompleted: {
        width: '100%',
        padding: 10,
        backgroundColor: "#64CCC5",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
    },
    taskText: {
        fontSize: 20,
    },
})