import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

type Props = {
    onComplete?:  () => void;
    onRemove: () => void;
    taskContent: string;
}

export function CreatedTask({ onRemove, taskContent }: Props){
    const [isCompleted, setIsCompleted] = useState(false);

    const handlePress = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        isCompleted ? <TaskCompleted onComplete={handlePress} onRemove={onRemove} taskContent={taskContent}/> : <TaskUncompleted onComplete={handlePress} onRemove={onRemove}/>
    )

}

function TaskUncompleted ({ onComplete, onRemove, taskContent }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.checkBox}>
                <TouchableOpacity style={styles.checkBoxButton} onPress={onComplete}>
                    <View style={styles.checkBoxCircle}></View>
                </TouchableOpacity>
            </View>
            <Text style={styles.textUncompleted}>T{taskContent}</Text>
            <TouchableOpacity style={styles.trash} onPress={onRemove}>
                <Image source={require('../../../assets/trash.png')} style={styles.trashImage}></Image>
            </TouchableOpacity>
        </View>
    )
}

function TaskCompleted ({ onComplete, onRemove, taskContent }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.checkBox}>
                <TouchableOpacity style={styles.checkBoxButton} onPress={onComplete}>
                <View style={styles.checkBoxCircleCompleted}>
                <Image source={require('../../../assets/checked.png')} style={styles.imageChecked}></Image>
                </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.textCompleted}>{taskContent}</Text>
            <TouchableOpacity style={styles.trash} onPress={onRemove}>
                <Image source={require('../../../assets/trash.png')} style={styles.trashImage}></Image>
            </TouchableOpacity>
        </View>
    )
}