import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { EmptyTask } from '../emptyTask';
import { CreatedTask } from '../createdTask';

type Props = {
    taskList: string[];
    onRemoveTask: () => void;
}

export function Task({ taskList, onRemoveTask }: Props) {

    const [isTask, setIsTask] = useState(false);

    useEffect(() => {
        isEmpty();
    }, [taskList]);

    const isEmpty = () => {
        if (taskList.length === 0 || taskList === undefined) {
            setIsTask(true);
        } else {
            setIsTask(false);
        }
    }
    

    return (
        isTask ? <EmptyTask></EmptyTask>  :  <CreatedTask onRemove={onRemoveTask} taskContent={}></CreatedTask>
    )
}
