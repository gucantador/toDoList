import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { EmptyTask } from '../emptyTask';

type Props = {
    taskList: string[];
}

export function Task({ taskList }: Props) {

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
        isTask ? <EmptyTask></EmptyTask>  : null
    )
}
