import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Text, Rating, Input } from 'react-native-elements';

class Comentario extends Component {
    render() {
        return(

            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{
                    backgroundColor: '#74002D',
                    flex: 1,
                    marginBottom: 10,
                    padding: 16,
                    width: (Dimensions.get('window').width)
                }}>
                <Text h4 style={styles.textoBlanco} >Envíanos tu comentario</Text>
                <Text style={styles.textoBlanco}>Califica a la ExpoBátiz de este año de 0 a 5 estrellas</Text>
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
                    style={{ paddingVertical: 10 }}
                    />
                </View>
                <View style={styles.container}>
                
                <Text>Escribe tu opinión:</Text>
                <TextInput
                    editable = {true}
                    maxLength = {40}
                    multiline = {true}
                    numberOfLines = {5}
                    style={{marginBottom: 10}}
                />

                <Button
                    buttonStyle={{
                        backgroundColor: "#74002D",
                        borderRadius: 8
                    }}
                    title='Enviar'
                />
                
                </View>
            </ScrollView>

        )
    }
}

var styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textoBlanco: {
        color: 'white'
    },
})

export default Comentario;