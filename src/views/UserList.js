import React, { useContext } from 'react'
import {View, FlatList, Alert} from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmuserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuário ?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#099dfd"/>}
                />

                <Button 
                    onPress={() => confirmuserDeletion(user)}
                    type="clear"
                    icon={<Icon name="trash-outline" type='ionicon' size={25} color="#fe4775"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            /> 
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}