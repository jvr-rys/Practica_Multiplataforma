import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <img src=""></img>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button 
                title = "Go to Pay"
                onPress = {() => navigation.navigate('Pay')}
            />

            <Button title = "Go back" onPress={() => navigation.goBack()}/>
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

export default DetailsScreen;
