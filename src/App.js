import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from 'react-native-elements';
import { UsersProvaider } from './context/UsersContext'


const Stack = createStackNavigator()

export default props => {
    return (
        <UsersProvaider>
       <NavigationContainer>
           <Stack.Navigator
           initialRouteName="UserList"
           screenOptions={screenOptions}>
               <Stack.Screen 
                name="UserList"
                component={UserList}
                options={({ navigation }) => {
                    return {
                        title: "lista de Usuários",
                        headerRight: () => (
                            <Button
                                onPress={() => navigation.navigate("UserForm")}
                                type="clear"
                                icon={<Icon name="add" size={25} color="white" />}
                            />
                        )
                    }
                }}
               />
                <Stack.Screen 
                name="UserForm"
                component={UserForm}
                options={{
                    title: "Formulário de Usuários"
                }}
               />
           </Stack.Navigator>
       </NavigationContainer>
       </UsersProvaider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#7676f9'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}