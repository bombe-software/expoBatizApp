import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button } from 'react-native-elements'

class Academia extends Component {
    render() {

        return(
            <ScrollView>
            <Image
                source = {{uri : this.props.academia}}
                style={styles.image_canvas}
                resizeMode="contain"
            />
            <View style={styles.container}>
                
                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 1'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>

                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 2'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>
                
                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 3'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>

                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 4'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>

                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 5'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>

                <ListItem
                    style={styles.list_item}
                    onPress={()=>{Actions.proyecto_exposicion_root()}}
                    title='Proyecto 6'
                    subtitle='Descripción de proyecto'
                >
                </ListItem>
  
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