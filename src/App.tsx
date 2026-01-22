import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.title}>Shift Workforce</Text>
            <Text style={styles.subtitle}>Training Management App</Text>
            <Text style={styles.status}>🚀 Day 1: Project Setup Complete</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10B981',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 40,
        textAlign: 'center',
    },
    status: {
        fontSize: 16,
        color: '#FFFFFF',
        opacity: 0.9,
    },
});

export default App;
