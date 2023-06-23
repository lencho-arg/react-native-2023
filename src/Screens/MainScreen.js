import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <View style = {styles.container}>
        <View style={styles.view1}>
        <TextInput style={styles.input}/>
        <TouchableOpacity 
        style={styles.button}>
        <Text>'Agregar tarea'</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.view2}>
        <Text>'Cambiar carenado'</Text>
    </View>
        
        
    
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view1: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray",
        width: '100%'
    },
    view2: {
        flex: 8,
        backgroundColor: "red",
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15
    },
    input: {
        width: 150,
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 3,
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 10,
        width: 150
    },
    task: {
        width: '80%',
        backgroundColor: 'blue',
        padding: 10,
    }
})