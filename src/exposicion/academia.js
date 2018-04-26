import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text } from 'react-native-elements'

proyectos = [
    {
        titulo: 'Cañon electomagnético',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Demos - Plataforma Informativa',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Generador de Kelvin',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Bioetanol',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Volcán de bicarbonato',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Dron',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
    {
        titulo: 'Otro Cañon electomagnético',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius vel justo ac dignissim. Quisque accumsan quam vitae dui malesuada posuere. Vestibulum et diam pellentesque, sagittis diam faucibus, posuere felis. Vivamus faucibus lacus diam, in ultricies lacus porttitor quis. Cras aliquam consequat commodo. '
    },
]

class Academia extends Component {
    render() {

        return(
            <ScrollView>
            <View style={{
                backgroundColor: this.props.color,
                flex: 1,
                overflow: 'hidden',
                marginBottom: 10,
                padding: 16,
                paddingTop: 40,
                paddingBottom: 40,
                width: (Dimensions.get('window').width)
            }}>
            <Text h3 style={{color:'white'}}>{this.props.academia}</Text>
            </View>
            <View style={styles.container}>
                
                {
                    proyectos.map(({descripcion, titulo})=> {
                        return(
                            <ListItem
                                key={titulo}
                                style={styles.list_item}
                                onPress={()=>{Actions.proyecto_exposicion_root({titulo, descripcion})}}
                                title={titulo}
                                subtitle={descripcion}
                            >
                            </ListItem>
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
    list_item: {
        backgroundColor: '#FFFFFF'
    },
    container: {
        padding: 10,
    },
    width_screen: {
        width: Dimensions.get('window').width,
    }
}

export default Academia;