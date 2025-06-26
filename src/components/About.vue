<template>
  <section class="about-section">
    <div class="overlay"></div>
    <div class="salad-bg"></div>
    <div class="content-wrapper">
      <div class="left-section">
        <h1 class="title">ABOUT <br />RESTAURANT</h1>
      </div>
      <div class="right-section">
        <p class="text-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p class="text-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('https://plus.unsplash.com/premium_photo-1675073085303-9c7c624b8c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJnJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D') no-repeat center center/cover;
  color: white;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

body, html, #app {
  height: 100vh;
  overflow: hidden !important;
  margin: 0;
  padding: 0;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.salad-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/src/assets/salad-bowl.png') no-repeat center center;
  background-size: cover;
  opacity: 0.18;
  z-index: 2;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
}

.left-section {
  flex: 1;
  text-align: center;
  position: relative;
}

.salad-img {
  width: 80%;
  max-width: 300px;
  margin-bottom: 20px;
}

.title {
  font-size: 48px;
  font-weight: bold;
  white-space: pre-line;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  font-family: 'Impact', sans-serif;
}

.right-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.text-block {
  font-size: 20px;
  font-family: 'Caveat', cursive;
  line-height: 1.8;
  color: #fff;
  max-width: 90%;
}

.leaf,
.tomato {
  position: absolute;
  z-index: 3;
}

.leaf {
  top: 20px;
  right: 50px;
  width: 60px;
}

.tomato {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
}
</style>
