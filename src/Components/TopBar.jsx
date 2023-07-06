import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder='Tarea'
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />

            <TouchableOpacity
                onPress={onAddTask}
                style={styles.button}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        minHeight: 80,
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "azure",
        width: "100%",
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8,
        fontSize: 20
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "black",
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
    },
})