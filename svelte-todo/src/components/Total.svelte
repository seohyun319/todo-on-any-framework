<script lang="ts">
	import { todoData } from '../store';

	let completedTodo = 0;
	$: completedTodo = $todoData.filter((todo) => todo.completed).length;
	$: ratio = $todoData.length > 0 ? (completedTodo / $todoData.length).toFixed(2) : 0;
</script>

<div>Total: {+ratio * 100} %</div>
