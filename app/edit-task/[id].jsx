import { useLocalSearchParams, router } from "expo-router";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { useState, useEffect } from "react";
import useTaskContext from "../../components/context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams()
  const { tasks, updateTask } = useTaskContext()

  const submitTask = (description) => {
    updateTask(id, description)
    router.navigate('/tasks')
  }

  const task = tasks.find(t => t.id == id)

  if (!task) {
    return (
      <View>
        <Text>
          Não foi encontrada uma tarefa com o id: {id}
        </Text>
      </View>
    )
  }

  return (
    <FormTask onFormSubmit={submitTask} defaultValue={task.description} />
  )
}
