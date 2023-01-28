<script>
	import { todoData } from '../store';

	let todoText = '';

	const handleAddTodo = () => {
		if (!todoText) return;

		const newTodo = {
			id: Date.now(),
			text: todoText,
			completed: false
		};

		$todoData = [...$todoData, newTodo];
		todoText = '';
	};
</script>

<input type="text" placeholder="오늘 뭐 할 거야?" bind:value={todoText} />
<button on:click={handleAddTodo}>입력</button>
