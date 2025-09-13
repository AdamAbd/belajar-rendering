<template>
  <div>
    <NuxtRouteAnnouncer />
    <header class="header">
      <nav class="nav">
        <NuxtLink to="/" class="logo">
          Nuxt Rendering Demo
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/ssr" class="nav-link ssr">
            SSR
          </NuxtLink>
          <NuxtLink to="/csr" class="nav-link csr">
            CSR
          </NuxtLink>
          <NuxtLink to="/prerender" class="nav-link prerender">
            Prerender
          </NuxtLink>
        </div>
      </nav>
    </header>
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}

.logo:hover {
  color: #3498db;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.nav-link.ssr {
  color: #3498db;
  background: #e8f4fd;
}

.nav-link.ssr:hover,
.nav-link.ssr.router-link-active {
  background: #3498db;
  color: white;
  border-color: #2980b9;
}

.nav-link.csr {
  color: #f39c12;
  background: #fff3cd;
}

.nav-link.csr:hover,
.nav-link.csr.router-link-active {
  background: #f39c12;
  color: white;
  border-color: #e67e22;
}

.nav-link.prerender {
  color: #17a2b8;
  background: #d1ecf1;
}

.nav-link.prerender:hover,
.nav-link.prerender.router-link-active {
  background: #17a2b8;
  color: white;
  border-color: #138496;
}

.main {
  min-height: calc(100vh - 80px);
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    width: 100%;
    justify-content: center;
  }
  
  .nav-link {
    flex: 1;
    text-align: center;
  }
}
</style>
