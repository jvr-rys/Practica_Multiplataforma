import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Image
                source={{ uri: 'https://media1.tenor.com/m/RQKAyM7ZHA0AAAAC/banana-dance.gif' }}
                style={{ width: 200, height: 200 }} 
            />
            <TouchableOpacity  onPress={() => navigation.navigate('Details')}>
                <Text>Go to Details</Text>
            </TouchableOpacity>
            

            <TouchableOpacity  onPress={() => navigation.navigate('Pay')}>
                <Text>Go to Pay</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
