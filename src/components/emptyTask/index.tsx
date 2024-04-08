import { View, Image, Text } from 'react-native';
import { styles } from './styles';



export function EmptyTask () {

    return (
        <View>
            <View style={styles.line}></View>
            <View style={styles.content}>
                <Image source={require('../../../assets/emptyTask.png')} style={styles.emptyTaskImage}/>
                <Text style={[styles.text, styles.textTop]}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}