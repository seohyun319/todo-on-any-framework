<template>
  <HeaderWrapper />
  <!-- v-bind:todoList="todoList"와 
  :todoList="todoList"는 동일 -->
  <!-- @는 사용자 정의 이벤트임을 명시해줌
    @addTodoItem은 addTodoItem이라는 이름으로 하위 메서드에 전달해줌을 의미함
  -->
  <MainWrapper
    :todoList="todoList"
    @addTodoItem="addTodoItem"
    @toggleTodoItem="toggleTodoItem"
    @removeTodoItem="removeTodoItem"
    @resetTodoList="resetTodoList"
  />
</template>

<script lang="ts">
// import JSConfetti from "js-confetti";
import HeaderWrapper from "./components/HeaderWrapper.vue";
import MainWrapper from "./components/MainWrapper.vue";
// import type { TodoItemType } from "./components/TodoItem.vue";
import { saveData, getData } from "./utils/storage";

interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

const TODO_STORAGE_KEY = "vue-todo-list";

// const jsConfetti = new JSConfetti();

export default {
  components: {
    HeaderWrapper: HeaderWrapper,
    MainWrapper: MainWrapper,
  },
  data() {
    return {
      todoList: [] as TodoItemType[],
    };
  },
  created() {
    const storageData = getData(TODO_STORAGE_KEY);
    if (storageData) {
      // 스크립트 내부 데이터 사용하기 위해서는 this 붙여줘야 함
      this.todoList = storageData;
    }
  },
  methods: {
    addTodoItem(todo: string) {
      if (todo) {
        const newTodoData = {
          id: this.todoList[this.todoList.length - 1]?.id + 1 || 1, // 마지막 요소의 id값 + 1
          completed: false,
          todo,
        };
        this.todoList.push(newTodoData);

        // LocalStorage 업데이트
        saveData(this.todoList, TODO_STORAGE_KEY);
      }
    },
    // todo 완료 동작시키는 함수
    toggleTodoItem(targetId: number) {
      this.todoList.forEach((todoItem) => {
        if (todoItem.id === targetId) {
          todoItem.completed = !todoItem.completed; // toggle

          // animation
          // if (todoItem.completed) {
          //   jsConfetti.addConfetti({
          //     emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
          //   });
          // }
        }
      });

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
    removeTodoItem(targetId: number) {
      this.todoList = this.todoList.filter(
        (todoItem) => todoItem.id !== targetId
      );

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
    resetTodoList() {
      this.todoList = [];

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  position: relative;
  min-height: 100vh;
  padding-bottom: 50px;
  text-align: center;
  background-color: #242424;
}
</style>
