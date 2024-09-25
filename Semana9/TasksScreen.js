import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Modal } from 'react-native';
import  Task  from '../components/task/task.js' 

export default function TasksScreen() {
    const [task_name, settask_name] = useState("")
    const [task_desc, settask_desc] = useState("")
    const [task_date, settask_date] = useState("")
    const [newTask, setnewTasks] = useState
      (
          {
            nome: '',
            descricao: '',
            data: ""
          }
        
        )
    
    const [search, setSearch] = useState("")
    const [tasks, setTasks] = useState([])
    const [original, setOriginal] = useState([
         {
           
           nome: "Estudar",
           descricao: "Estudar para DevInHouse",
           data: "18 set 2024"
         },
         {
           
           nome: "Pagar boleto",
           descricao: "Pagar boleto do condominio de minas",
           data: "17 set 2024"
         },
       
      ])
    const [modalVisible, setModalVisible] = useState(false)
    
    useEffect(() => {
        
        console.log('usuario digitando no input de busca ou array Original foi alterado')
        const filtrado = original.filter(item =>
          item.nome.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()))
    
    
        setTasks(filtrado)
      }, [search, original])
    
    function setnewTask()
    {
      newTask.nome = task_name
      newTask.descricao = task_desc
      newTask.data = task_date
      setTasks([...original, newTask])
    }
    
    
      return (
        <View style={styles.container}>
          
          <TextInput style={styles.searchInput} placeholder='Buscar tarefa' onChangeText={setSearch} value={search} />
    
          <Button title='Criar Tarefa' onPress={() => setModalVisible(true)} />
    
          <TextInput placeholder='Digite uma nova tarefa' value={task_name} onChangeText={settask_name} ></TextInput>
          <TextInput placeholder='Digite a descricao para tarefa' value={task_desc} onChangeText={settask_desc} ></TextInput>
          <TextInput placeholder='Digite a data para tarefa' value={task_date} onChangeText={settask_date} ></TextInput>
    
          
    
              
    
          <View style={styles.tasks}>
            {tasks.map(task => {
              
              return <View style={styles.tasks}>
                <Task 
                nome={task.nome}
                descricao={task.descricao}
                data={task.data} />
                </View>
            })
            }
          </View>
    
          <Button title='Adicionar Tarefa' onPress={setnewTask}></Button>
    
          <Modal
            animationType='slide'
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Nova Tarefa</Text>
                <TextInput placeholder='Digite o nome da tarefa' value={task_name} onChangeText={settask_name}/>
                <TextInput placeholder='Digite o nome da tarefa' value={task_name} onChangeText={settask_name}/>
                <TextInput placeholder='Digite o nome da tarefa' value={task_name} onChangeText={settask_name}/>
              
                <Button title='Cancelar' onPress={() => setModalVisible(false)} />
                <Button title='Salvar' onPress={setnewTask} />
              </View>
            </View>
          </Modal>
    
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
    