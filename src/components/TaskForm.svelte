<script>
  import { createEventDispatcher } from 'svelte';
  let taskTitle = '';
  const dispatch = createEventDispatcher();

  const addTask = () => {
    if (taskTitle.trim()) {
      dispatch('add', { title: taskTitle });
      taskTitle = '';
    }
  };
</script>

<div class="task-form">
  <input
    type="text"
    placeholder="Enter task"
    bind:value={taskTitle}
    on:keydown={(e) => e.key === 'Enter' && addTask()}
  />
  <button on:click={addTask}>Add Task</button>
</div>

<style>
  .task-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>
