<script>
  import Task from './Task.svelte';

  export let tasks = [];
  export let onToggle;
  export let onDelete;
</script>

<div>
  {#each tasks as task (task.id)}
    <Task {task} {onToggle} {onDelete} />
  {/each}
</div>
