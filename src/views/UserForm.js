import React, { useState, useContext } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'
import { Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text style={style.text}>
                Nome
            </Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            
            <Text style={style.text}>
                Email
            </Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
            />

            <Text style={style.text}>
                Telefone
            </Text>
            <TextInput 
                style={style.input}
                onChangeText={phone => setUser({...user, phone})}
                placeholder="Informe o telefone"
                keyboardType = 'numeric'
                value={user.phone}
            />

            <Text style={style.text}>
                Imagem
            </Text>
            <TextInput 
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Url imagem"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 0.25,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    text: {
        fontSize: 25
    },
})