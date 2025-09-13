<template>
  <div class="container">
    <h1>Prerendered (Static Generation)</h1>
    <p class="strategy-info">
      This page is prerendered at build time. Data is fetched during the build process and served as static HTML.
    </p>
    
    <div v-if="pending" class="loading">
      Loading todos...
    </div>
    
    <div v-else-if="error" class="error">
      Error loading todos: {{ error }}
    </div>
    
    <div v-else class="todos-container">
      <h2>Todos ({{ data?.total }} total)</h2>
      <div class="build-info">
        <p><strong>Build Time:</strong> {{ buildTime }}</p>
        <p><em>This data was fetched at build time and is now served statically.</em></p>
      </div>
      <div class="todos-grid">
        <div 
          v-for="todo in data?.todos" 
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
      <p><strong>Rendering Strategy:</strong> Prerendering (Static Generation)</p>
      <p><strong>Data Fetching:</strong> useFetch at build time</p>
      <p><strong>Performance:</strong> Instant loading - no server requests needed</p>
      <p><strong>SEO:</strong> Fully optimized - content available immediately</p>
    </div>
  </div>
</template>

<script setup>
// Define component name to fix linter error
defineOptions({
  name: 'PrerenderPage'
})

// Build-time data fetching using useFetch
const { data, pending, error } = await useFetch('https://dummyjson.com/todos')

// Generate build timestamp
const buildTime = new Date().toLocaleString()

// Set page title
useHead({
  title: 'Prerender Page - Nuxt Rendering Demo'
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
  background: #d1ecf1;
  border-left: 4px solid #17a2b8;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 4px;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #7f8c8d;
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
  margin-bottom: 1rem;
}

.build-info {
  background: #e8f5e8;
  border: 1px solid #28a745;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.build-info p {
  margin: 0.25rem 0;
}

.build-info em {
  color: #155724;
  font-size: 0.9rem;
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