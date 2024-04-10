import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { EmptyTask } from '../emptyTask';
import { CreatedTask } from '../createdTask';

type Props = {
    onRemoveTask: () => void;
    taskContent: string;
    onConcludeTask: () => void;
}

export function Task({ onRemoveTask, taskContent, onConcludeTask }: Props) {

    return (
        <CreatedTask onRemove={onRemoveTask} taskContent={taskContent} onConcludeTask={onConcludeTask}></CreatedTask>
    )
}
