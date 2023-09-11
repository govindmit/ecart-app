import React from 'react';
import { Image, Text, View, TextInput, Button } from 'react-native';

const Footer = () => {
    return (
        <>
            <View
                style={{
                    width: '100%',
                    height: 550,
                    padding: 20,
                    marginTop: 80,
                    backgroundColor: '#eeeeee',
                    display: 'flex',
                    shadowOffset: { width: 20, height: 30 },
                    shadowRadius: 50,
                    shadowOpacity: 2,
                    elevation: 5,
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '900',
                        lineHeight: 25,
                        marginTop: 30,
                        marginBottom: 15,
                        textTransform: 'uppercase',
                        color: 'black',
                        textDecorationLine: 'underline',
                        textDecorationStyle: 'solid',
                    }}>
                    Contact US Updates
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 25,
                        marginTop: 20,
                        marginBottom: 10,
                        color: 'black',
                    }}>
                    Address : -
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 25,
                        marginTop: 20,
                        marginBottom: 10,
                        color: 'black',
                    }}>
                    Cell-Phone : 6589451236
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 25,
                        marginTop: 20,
                        marginBottom: 10,
                        color: 'black',
                    }}>
                    Email : tp@email.com
                </Text>

                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '900',
                        lineHeight: 25,
                        marginTop: 30,
                        marginBottom: 15,
                        textTransform: 'uppercase',
                        color: 'black',
                        textDecorationLine: 'underline',
                        textDecorationStyle: 'solid',
                    }}>
                    Email Newsletters
                </Text>
                <TextInput style={{ elevation: 1, padding: 15 }} placeholder="Email" />
                <View style={{ width: 90, marginTop: 5 }}>
                    <Button title="Subscribe" />
                </View>
                <View>
                    <Text
                        style={{
                            width: '100%',
                            marginTop: 20,
                            fontSize: 17,
                            padding: 15,
                            left: 4,
                        }}>
                        © MangoIT E-cart 2022. All Rights Reserved.
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', right: -180 }}>
                        <Image
                            style={{ width: 50, height: 30 }}
                            source={require('../assets/paypalicon.png')}></Image>
                        <Image source={require('../assets/discovericon.png')}></Image>
                        <Image source={require('../assets/visaicon.png')}></Image>
                        <Image source={require('../assets/cardicon.png')}></Image>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Footer;
