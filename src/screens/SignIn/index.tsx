import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../RootStackParams';

import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'


type signInScreenProp = StackNavigationProp<RootStackParamList>

export function SignIn() {
  const navigation = useNavigation<signInScreenProp>()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seu games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          onPress={handleSignIn}
        >
          Entrar com Discord
        </ButtonIcon>
      </View>

    </View>
  )
}
