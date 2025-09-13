<template>
  <div class="container">
    <h1>Client-Side Rendering (CSR)</h1>
    <p class="strategy-info">
      This page is rendered on the client. Data is fetched after component mounting using onMounted lifecycle hook.
    </p>
    
    <div v-if="loading" class="loading">
      Loading todos...
    </div>
    
    <div v-else-if="error" class="error">
      Error loading todos: {{ error }}
    </div>
    
    <div v-else-if="todos" class="todos-container">
      <h2>Random Todos ({{ todos.length || 0 }} items)</h2>
      <div class="todos-grid">
        <div 
          v-for="todo in todos" 
          :key="todo.id" 
          class="todo-card"
          :class="{ completed: todo.completed }"
        >
          <div class="todo-id">#{{ todo.id }}</div>
          <div class="todo-text">{{ todo.todo }}</div>
          <div class="todo-status">
            {{ todo.completed ? '✅ Completed' : '⏳ Pending' }}
          </div>
          <div class="todo-user">User: {{ todo.userId }}</div>
        </div>
      </div>
    </div>
    
    <div class="render-info">
      <p><strong>Rendering Strategy:</strong> Client-Side Rendering</p>
      <p><strong>Data Fetching:</strong> fetch() in onMounted hook</p>
      <p><strong>Hydration:</strong> Data loaded after client-side hydration</p>
      <p><strong>Loading Time:</strong> {{ loadingTime ? `${loadingTime}ms` : 'Calculating...' }}</p>
    </div>
  </div>
</template>

<script setup>
// Reactive data
const todos = ref(null)
const loading = ref(true)
const error = ref(null)
const loadingTime = ref(null)

// Client-side data fetching
onMounted(async () => {
  const startTime = Date.now()
  
  try {
    loading.value = true
    const response = await fetch('https://dummyjson.com/todos/random/3')
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    todos.value = data
    loadingTime.value = Date.now() - startTime
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

// Set page title
useHead({
  title: 'CSR Page - Nuxt Rendering Demo'
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1rem;
}

.strategy-info {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 4px;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #7f8c8d;
  animation: pulse 1.5s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

.error {
  background: #fdf2f2;
  border: 1px solid #e74c3c;
  color: #c0392b;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.todos-container h2 {
  color: #34495e;
  margin-bottom: 1.5rem;
}

.todos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.todo-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.todo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.todo-card.completed {
  background: #f8fff8;
  border-color: #27ae60;
}

.todo-id {
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.todo-text {
  font-weight: 500;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.todo-status {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.todo-user {
  font-size: 0.8rem;
  color: #7f8c8d;
}

.render-info {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.render-info p {
  margin: 0.5rem 0;
}

.render-info strong {
  color: #495057;
}
</style>