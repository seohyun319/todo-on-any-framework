<script>
	import { todoData } from '../store';

	export let todo;
	let { id, text, completed } = todo;

	const handleRemoveTodo = (/** @type {number} */ id) => {
		$todoData = $todoData.filter((todo) => todo.id !== id);
	};
</script>

<div class="todo-item">
	<input type="checkbox" bind:checked={completed} />
	<div>{text}</div>
	<button on:click={() => handleRemoveTodo(id)}>x</button>
</div>

<style>
	.todo-item {
		display: flex;
	}
</style>
