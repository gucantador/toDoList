import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert, KeyboardAvoidingView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { useState } from 'react';

import { styles } from './styles'

import { Task } from './../../components/Task';
import { EmptyTask } from './../../components/emptyTask';

export default function Home() {


    const [tasks, setTasks] = useState<string[]>([]);
    const [taskContent, setTaskContent] = useState('');
    const [tasksConcluded, setTasksConcluded] = useState<string[]>([]);

    const handleTaskAdd = () => {
      if (taskContent === ''){
        return Alert.alert("Você não pode criar uma tarefa sem conteúdo")
      }
      if (tasks.includes(taskContent)){
        return Alert.alert("Participante existente","Ja existe um participante com esse nome na lista")
      }
      setTasks(prevState => [...prevState, taskContent]);
      setTaskContent('');
    }

    const removeTask = (taskName: string) => {
      const remove = () =>{
        setTasks(prevState => prevState.filter(task => task !== taskName));
        Alert.alert("Deleted!")
      }
      Alert.alert("Remove", `Remove task: ${taskName}?`, [
        {
          text: 'Yes', 
          onPress: () => remove()
        },
        {
          text: 'no',
          style: 'cancel'
        }
      ])
      if (tasksConcluded.includes(taskName)){
        setTasksConcluded(prevState => prevState.filter(task => task !== taskName));
      }
      console.log(`You just removed the task: ${taskName}`);
    }

    const handleTaskStatus = (taskName: string) => {
      if (tasksConcluded.includes(taskName)){
        setTasksConcluded(prevState => prevState.filter(task => task !== taskName));
      }
      else {
        setTasksConcluded(prevState => [...prevState, taskName]);
      }
    }
    

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_800ExtraBold,
      });

      if (!fontsLoaded) {
        return null; // Ou uma tela de carregamento
      }
    
    return(
      <View style={styles.homePage}>
        <View style={styles.containerTop}> 
          <View style={styles.logo}>
              <Image  source={require('../../../assets/rocket.png')} style={styles.logoImage}/>
              <Text style={[styles.to_logo, { fontFamily: 'Inter_800ExtraBold' }]}>to</Text>
              <Text style={[styles.do_logo, { fontFamily: 'Inter_800ExtraBold' }]}>do</Text>
          </View>
        </View> 
        <View style={styles.containerBottom}>
          <View style={styles.tasksMeasures}>
            <View style={styles.created}>
              <Text style={[styles.textCreated, { fontFamily: 'Inter_800ExtraBold' }]}>Criadas</Text>
              <View style={styles.numberContainer}>
                <Text style={[styles.howManyCreated,  { fontFamily: 'Inter_800ExtraBold' }]}>{tasks.length}</Text>
              </View>
            </View>
            <View style={styles.concluded}>
              <Text style={[styles.textConcluded, { fontFamily: 'Inter_800ExtraBold' }]}>Concluídas</Text>
              <View style={styles.numberContainer}>
                <Text style={[styles.howManyConclude, { fontFamily: 'Inter_800ExtraBold' }]}>{tasksConcluded.length}</Text>
              </View>
              
            </View>
          
          </View>
         {/* tasks here */}
         
         <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({item}) =>(
              <Task 
                key={item} 
                taskContent={item} 
                onRemoveTask={() => removeTask(item)}
                onConcludeTask={() => handleTaskStatus(item)}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <EmptyTask></EmptyTask>
            )}
         />
        </View>
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextColor="#fffafa"
            selectionColor= "#5E60CE"
            onChangeText={text => setTaskContent(text)}
            value={taskContent}
            />
            <TouchableOpacity onPress={handleTaskAdd}>
              <Image source={require('../../../assets/add_task.png')} style={styles.buttonImage}/>
          </TouchableOpacity>
        </View>
        
        </View>
    );
}