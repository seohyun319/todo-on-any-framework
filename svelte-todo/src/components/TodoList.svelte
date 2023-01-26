<script>
	import { todoData } from '../store';
	import TodoItem from './TodoItem.svelte';
</script>

{#each $todoData as todo (todo.id)}
	<TodoItem {todo} />
{/each}
