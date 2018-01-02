import  React  from 'react'
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native'

const Estilos = {
	principal: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
	},
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
}

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random()
  numeroAleatorio = Math.floor(numeroAleatorio * 5)

  let frases = new Array()
  frases[0] = 'aa'
  frases[1] = 'bb'
  frases[2] = 'c'
  frases[3] = 'd'
  frases[4] = 'e'

  let fraseEscolhida = frases[ numeroAleatorio ]
  
  Alert.alert(fraseEscolhida)
}

const App = () => {
	const { principal, botao, textoBotao } = Estilos
  return (
    <View style={principal}>
    	<Image source={ require('./img/logo.png') } />

    	<TouchableOpacity 
                        onPress={gerarNovaFrase}
                        style={botao}>
    		<Text style={ textoBotao }>Nova frase</Text>
    	</TouchableOpacity>
    </View>
  )
}

AppRegistry.registerComponent('old_version_frases_do_dia', () => App )
