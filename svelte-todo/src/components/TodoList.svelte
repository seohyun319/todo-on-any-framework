<script>
	import TodoItem from './TodoItem.svelte';

	const todoList = [
		{
			id: 1,
			text: '작살나게 놀기',
			completed: true
		},
		{
			id: 2,
			text: '신명나는 스벨트 공부',
			completed: false
		},
		{
			id: 3,
			text: '갓생 살기',
			completed: false
		}
	];
</script>

{#each todoList as todo (todo.id)}
	<TodoItem {todo} />
{/each}
