<script>
  export let task;
  export let onToggle;
  export let onDelete;

  const toggleTask = () => onToggle(task.id);
  const deleteTask = () => onDelete(task.id);
</script>

<div class="task {task.completed ? 'completed' : ''}">
  <input type="checkbox" checked={task.completed} on:change={toggleTask} />
  <span>{task.title}</span>
  <button on:click={deleteTask}>Delete</button>
</div>

<style>
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }
  .completed span {
    text-decoration: line-through;
  }
</style>
