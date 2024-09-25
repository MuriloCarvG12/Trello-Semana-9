import { Button, Text, TextInput, View, Switch,StyleSheet } from 'react-native';

// props
function Task({ nome, descricao, status, data }) {
    return (
        <View styles={styles.container}>   
            <Text>Nome: {nome}</Text>    
            <Text>Descricao: {descricao}</Text>   
                
            <Text>Data: {data}</Text>

        {/* nome, descricao, status, data */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tasks:
    {
      padding:20,
    },
    centeredView:
    {
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalView:
    {
      alignSelf: 'center'
  
    }
  });
  

export default Task;