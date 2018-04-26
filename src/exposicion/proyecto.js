import React, { Component } from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button, Text, Rating, ButtonGroup } from 'react-native-elements'

class Proyecto extends Component {

    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {

        const buttons = ['Participantes', 'Galería']
        const { selectedIndex } = this.state

        return(

            <ScrollView>

                <View style={{
                    backgroundColor: '#74002D',
                    flex: 1,
                    padding: 16,
                    paddingTop: 40,
                    paddingBottom: 40,
                    width: (Dimensions.get('window').width)
                }}>
                <Text h4 style={styles.textoBlanco} >{this.props.titulo}</Text>
                <Text style={styles.textoBlanco}>{this.props.descripcion}</Text>
                </View>

                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    padding: 16,
                    width: (Dimensions.get('window').width),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Rating
                    showRating
                    type="star"
                    fractions={0}
                    startingValue={0}
                    imageSize={40}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10, marginBottom:10 }}
                    />
                    <Button
                    buttonStyle={{
                        backgroundColor: "#74002D",
                        borderRadius: 8
                    }}
                    title='Calificar'
                />
                </View>

                <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{height: 50}}
                    />
                <View style={styles.container}>



                </View>
            </ScrollView>

        )
    }
}

var styles = StyleSheet.create({
    textoBlanco: {
        color: 'white'
    },
    container: {
        padding: 10
    },
})

export default Proyecto;