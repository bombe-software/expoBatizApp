import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button,Text } from 'react-native-elements'

import gradients from '../../assets/gradients';
import colors from '../../assets/colors';
//var g = JSON.parse(gradients);

var academias = [
    'Física',
    'Matemáticas',
    'Química',
    'Programación',
    'Máquinas y Sistemas Automatizados',
    'Sistemas Digitales',
]

class Exposicion extends Component {
    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                {
                    academias.map((academia)=>{
                        let gradient = gradients[Math.floor(Math.random()*gradients.length)];
                        let color = colors[Math.floor(Math.random()*colors.length)];
                        return(
                            <TouchableHighlight 
                                key={academia}
                                onPress={()=>{Actions.academia_exposicion_root({academia, color})}}
                            >
                            <View 
                                style={{
                                    backgroundColor: color,
                                    flex: 1,
                                    borderRadius: 8,
                                    overflow: 'hidden',
                                    marginBottom: 10,
                                    marginLeft: 8,
                                    marginRight: 8,
                                    padding: 16,
                                    width: (Dimensions.get('window').width-32)
                                }}
                                colors={gradient.colors}    
                            >
                            <View>
                                <Text h4 style={{color: 'white'}}>{academia}</Text>
                            </View>
                            </View>
                            </TouchableHighlight>
                        );
                    })
                }
                <ListItem
                    scaleProps={{
                    friction: 90,
                    tension: 100,
                    activeScale: 0.95,
                    }}
                    linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                    }}
                    ViewComponent={LinearGradient} // Only if no expo
                    title="Chris Jackson"
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="Vice Chairman"
                    chevronColor="white"
                    chevron
                />
            </View>
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
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
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        width: (Dimensions.get('window').width-16)
    },
    linearGradient: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        padding: 16,
        width: (Dimensions.get('window').width-32),
    },
    container: {
        padding: 10
    },
    width_screen: {
        width: Dimensions.get('window').width,
    }
})

export default Exposicion;