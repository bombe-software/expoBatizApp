import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button } from 'react-native-elements'

var imgRoute = 'https://raw.githubusercontent.com/bombe-software/expoBatizApp/master/assets/images/academias/academia';
var imagesAcademias = [
    `${imgRoute}01.PNG`,
    `${imgRoute}02.PNG`,
    `${imgRoute}03.PNG`,
    `${imgRoute}04.PNG`,
    `${imgRoute}05.PNG`,
    `${imgRoute}06.PNG`,
    `${imgRoute}07.PNG`,
]

class Exposicion extends Component {
    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                {
                    imagesAcademias.map((img)=>{
                        return(
                            <TouchableHighlight 
                                key={img}
                                onPress={()=>{Actions.academia_exposicion_root({academia: img})}}
                            >
                            <View 
                                style={styles.rounded_corners_view}>
                            <Image
                                source = {{uri : img}}
                                style={styles.image_canvas}
                                resizeMode="contain"
                            />
                            </View>
                            </TouchableHighlight>
                        );
                    })
                }
            </View>
            </ScrollView>
        )
    }
}
var styles = {
    image_canvas: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        height: (Dimensions.get('window').width/3),
        margin: 0
    },
    card_style: {
        padding: 0
    },
    rounded_corners_view: {
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10
    },
    container: {
        padding: 10
    },
    width_screen: {
        width: Dimensions.get('window').width,
    }
}

export default Exposicion;