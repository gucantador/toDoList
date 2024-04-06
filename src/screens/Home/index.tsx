import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_800ExtraBold } from '@expo-google-fonts/inter';

import { styles } from './styles'

export default function Home() {

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
              <Text style={styles.textCreated}>Criadas</Text>
              <Text style={styles.howManyCreated}>0</Text>
            </View>
            <View style={styles.concluded}>
              <Text style={styles.textConcluded}>Concluded</Text>
              <Text style={styles.howManyConclude}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="What needs to be done?"
            placeholderTextColor="#fffafa"
            selectionColor= "#5E60CE"
            />
            <TouchableOpacity>
              <Image source={require('../../../assets/add_task.png')} style={styles.buttonImage}/>
          </TouchableOpacity>
        </View>
        
        
        
        </View>
    );
}