
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import Header from '../header/header';
import Card from "../cards/card"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimelineScreen from '../timeline/timeline.screen';
import React, { Component, useState, useRef } from 'react';
import { setRating } from "./reputation.service"



export const ListReputationScreen = () => {
    const [facebookId, setFacebookId] = useState(null)
    const [facebookURL, setFacebookURL] = useState(null)
    const [ratingValue, setRatingValue] = useState(null)


    const onFacebookIdChange = (value) => {
        setFacebookId(value)
    }
    const onFacebookURLChange = (value) => {
        setFacebookURL(value)
    }
    const onRatingValueChange = (value) => {
        ratingValue(value)
    }

 


    return (
        <View>
            <Text>Facebook</Text>
            <TextInput
                value={facebookId}
                onChangeText={(facebookId) => onFacebookIdChange(facebookId)}
                placeholder={'facebookId'}
                style={styles.input}
            />

            <TextInput
                value={facebookURL}
                onChangeText={(facebookURL) => onFacebookURLChange(facebookURL)}
                placeholder={'facebookURL'}
                style={styles.input}
            />

            <TextInput
                value={ratingValue}
                onChangeText={(ratingValue) => onRatingValueChange(ratingValue)}
                placeholder={'ratingValue'}
                style={styles.input}
            />

            <Button
                title={'Submit'}
                style={styles.input}
                onPress={()=>setRating({reputationId:"ee",currentValue:5})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
