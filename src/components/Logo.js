import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View style={styles.FirstView}>
                <Image
                    style={styles.MainImage}
                    source={require('../assets/mangopic.png')}
                />
            </View>
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    FirstView: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        width: "100%",
        height: 100,
    },
    MainImage: {
        position: 'relative',
        width: 160,
        height: 150,
        marginTop:10,
        marginLeft: -150,
    },
});
