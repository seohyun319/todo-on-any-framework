<template>
  <main>
    <TodoInput @addTodoItem="addTodoItem" />
    <!-- props 받아서 전달해주는 역할 -->
    <TodoList
      :todoList="todoList"
      @removeTodoItem="removeTodoItem"
      @toggleTodoItem="toggleTodoItem"
    />
    <TodoReset @resetTodoList="resetTodoList" />
  </main>
</template>

<script lang="ts">
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import TodoReset from "./TodoReset.vue";

export default {
  components: {
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoReset: TodoReset,
  },
  props: ["todoList"],
  methods: {
    addTodoItem(todo: string) {
      // this.$emit로 addTodoItem 이벤트 가져오고 todo라는 변수 넣어줌
      this.$emit("addTodoItem", todo);
    },
    toggleTodoItem(targetId: number) {
      this.$emit("toggleTodoItem", targetId);
    },
    removeTodoItem(targetId: number) {
      this.$emit("removeTodoItem", targetId);
    },
    resetTodoList() {
      this.$emit("resetTodoList");
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
