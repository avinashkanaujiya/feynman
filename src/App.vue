<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/HelloWorld.vue'
import { ref, onMounted } from 'vue';

let toggle = ref(true);
function hideTheShit() {
  toggle.value = false;
  console.log('ddgd', toggle);
}

onMounted(() => {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    })
  }
})
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <AppHeader msg="feynman's !" />
      <!-- <h2>Routine Prompt</h2> -->

      <!-- <p>A Collapsible:</p> -->
      <br>
      <div class="collapsible-button-container">
        <button type="button" class="collapsible">Morning Routine <br> (4:30 - 7:30 -> 3 Hours)</button>
        <div class="content">
          <ul>
            <li> Rise, Rinse & Meditate  </li>
            <li  @click="hideTheShit" > Plan the Day's Task & Take Resolution of the Day</li>
            <li> Read on something unrelated to day to day work.</li>
            <li> Breakfast</li>
          </ul>
        </div>
      </div>

      <div class="collapsible-button-container">
        <button type="button" class="collapsible">Evening Routine <br> (18:00 - 21:00 -> 3 Hours)</button>
        <div class="content">
          <ul>
            <li> Put things in their places  </li>
            <li> Music, Diversion, Conversations</li>
            <li> Examination of the Day</li>
            <li> Supper</li>
          </ul>
        </div>
      </div>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  a.router-link-exact-active {
    color: var(--color-text);
  }

  a.router-link-exact-active:hover {
    background-color: transparent;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  a:first-of-type {
    border: 0;
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.collapsible-button-container{
  padding-bottom: 2vw;
  .collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 9px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }

  .active, .collapsible:active {
    background-color: #555;
  }

  .content {
    padding: 0px 20px 0px 0px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
    color: #000000;
  }
}

</style>
