import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button } from 'react-native-elements'

var imgRoute = '../../assets/images/academias/academia01.png';

class Exposicion extends Component {
    render() {
        return(

            <View>
                <Card 
                    containerStyle={{padding: 0}}
                >
                    <Image
                        source = {{uri : '../../assets/images/academias/academia01.png'}}
                    />
                </Card>
            </View>

        )
    }
}

export default Exposicion;