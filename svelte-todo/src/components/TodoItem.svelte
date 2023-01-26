<script>
	export let todo;
	let { text, completed } = todo;
</script>

<div class="todo-item">
	<input type="checkbox" bind:checked={completed} />
	<div>{text}</div>
	<button>x</button>
</div>

<style>
	.todo-item {
		display: flex;
	}
</style>
