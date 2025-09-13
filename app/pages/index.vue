<template>
  <div class="container">
    <div class="hero">
      <h1>Nuxt.js 4.1 Rendering Strategies Demo</h1>
      <p class="subtitle">
        Explore different rendering strategies and their impact on data fetching behavior
      </p>
    </div>
    
    <div class="strategies-grid">
      <div class="strategy-card ssr">
        <div class="strategy-icon">🖥️</div>
        <h3>Server-Side Rendering (SSR)</h3>
        <p>
          Pages are rendered on the server for each request. Data is fetched server-side using <code>useFetch</code>, 
          providing immediate content availability and excellent SEO.
        </p>
        <div class="features">
          <span class="feature">✅ SEO Optimized</span>
          <span class="feature">✅ Fast Initial Load</span>
          <span class="feature">✅ Server-side Data</span>
        </div>
        <NuxtLink to="/ssr" class="demo-button ssr-btn">
          View SSR Demo
        </NuxtLink>
      </div>
      
      <div class="strategy-card csr">
        <div class="strategy-icon">🌐</div>
        <h3>Client-Side Rendering (CSR)</h3>
        <p>
          Pages are rendered in the browser after JavaScript loads. Data is fetched client-side using 
          <code>onMounted</code>, providing dynamic interactivity.
        </p>
        <div class="features">
          <span class="feature">✅ Dynamic Content</span>
          <span class="feature">✅ Rich Interactions</span>
          <span class="feature">⚠️ Loading States</span>
        </div>
        <NuxtLink to="/csr" class="demo-button csr-btn">
          View CSR Demo
        </NuxtLink>
      </div>
      
      <div class="strategy-card prerender">
        <div class="strategy-icon">⚡</div>
        <h3>Prerendering (Static)</h3>
        <p>
          Pages are generated at build time with data fetched during the build process. 
          Results in ultra-fast loading with static HTML files.
        </p>
        <div class="features">
          <span class="feature">✅ Lightning Fast</span>
          <span class="feature">✅ CDN Friendly</span>
          <span class="feature">✅ Build-time Data</span>
        </div>
        <NuxtLink to="/prerender" class="demo-button prerender-btn">
          View Prerender Demo
        </NuxtLink>
      </div>
    </div>
    
    <div class="api-info">
      <h2>API Integration</h2>
      <p>
        All demos fetch data from <code>https://dummyjson.com/todos</code> to demonstrate 
        how each rendering strategy handles data fetching and loading states.
      </p>
      <div class="timing-comparison">
        <h3>Expected Behavior:</h3>
        <ul>
          <li><strong>SSR:</strong> Data available immediately on page load</li>
          <li><strong>CSR:</strong> Loading state visible, then data appears</li>
          <li><strong>Prerender:</strong> Static data from build time, instant display</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define component name to fix linter error
defineOptions({
  name: 'HomePage'
})

// Set page title
useHead({
  title: 'Nuxt Rendering Strategies Demo',
  meta: [
    {
      name: 'description',
      content: 'Demonstration of different rendering strategies in Nuxt.js 4.1: SSR, CSR, and Prerendering'
    }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.strategies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.strategy-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid;
}

.strategy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.strategy-card.ssr {
  border-top-color: #3498db;
}

.strategy-card.csr {
  border-top-color: #f39c12;
}

.strategy-card.prerender {
  border-top-color: #17a2b8;
}

.strategy-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.strategy-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.strategy-card p {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.strategy-card code {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #e74c3c;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.feature {
  font-size: 0.9rem;
  padding: 0.3rem 0;
}

.demo-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
  color: white;
}

.ssr-btn {
  background: #3498db;
}

.ssr-btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.csr-btn {
  background: #f39c12;
}

.csr-btn:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

.prerender-btn {
  background: #17a2b8;
}

.prerender-btn:hover {
  background: #138496;
  transform: translateY(-2px);
}

.api-info {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #6c757d;
}

.api-info h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.api-info p {
  color: #5a6c7d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.api-info code {
  background: #e9ecef;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #495057;
}

.timing-comparison {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.timing-comparison h3 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.timing-comparison ul {
  list-style: none;
  padding: 0;
}

.timing-comparison li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f3f4;
  color: #5a6c7d;
}

.timing-comparison li:last-child {
  border-bottom: none;
}

.timing-comparison strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .strategies-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 1rem;
  }
}
</style>