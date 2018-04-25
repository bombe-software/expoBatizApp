import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

/* COMPONENTES DE EXPOSICIÓN */
import Exposicion from './exposicion/exposicion';
import Academia from './exposicion/academia';
import Proyecto from './exposicion/proyecto';

/* COMPONENTES DE COMENTARIOS */
import Comentario from './comentario';

/* HOJA DE ESTILOS COMUNES */
import { primario, neutro } from './styles.js'

class ExpoBatiz extends Component {

    renderTabIcon({ selected, title, iconName }) {
        var color = selected ? primario : neutro;

        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                <Icon style={{ color: color }} name={iconName || "circle"} size={18} />
            </View>
        );
    }

    render(){
        return(
            <Router>
                <Stack hideNavBar>
                    <Scene 
                        key='root'
                        tabs={true}
                        tabBarPosition={'bottom'}
                        tabBarStyle={{ backgroundColor: '#FFFFFF', borderColor: '#ffffff' }}
                    >

                        <Scene title='Proyectos' key='exposicion_root' iconName="list" icon={this.renderTabIcon}>
                            <Scene title='Proyectos' key='index_exposicion_root' component={Exposicion}></Scene>
                            <Scene title='Academia' key='academia_exposicion_root' component={Academia}></Scene>
                            <Scene title='Proyecto' key='proyecto_exposicion_root' component={Proyecto}></Scene>
                        </Scene>

                        <Scene title='Comentarios' key='comentarios_root' iconName="comments" icon={this.renderTabIcon}>
                            <Scene key='index_comentario_root' component={Comentario}></Scene>
                        </Scene>

                        <Scene title='Escanear' key='qr_root' iconName="qrcode" icon={this.renderTabIcon}>
                            <Scene key='index_qr_root' component={() => { return (<Text>QR</Text>) }}></Scene>
                        </Scene>

                    </Scene>
                </Stack>
            </Router>
        );
    }

}

export default ExpoBatiz;