<template>
  <nav
    class="bg-white border-b border-gray-200 px-4 py-2 justify-between items-center hidden lg:flex drop-shadow-md"
  >
    <div class="flex">
      <button @click="toggleMenu">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div class="text-lg font-semibold ml-2">keep</div>
    </div>

    <!-- <div class="flex space-x-4">
      <a href="home">Home</a>
      <a href="investion">investion</a>
      <a href="currency">Currency</a>
      <a href="planing">Planing</a>
    </div> -->
  </nav>

  <div
    :class="{ 'translate-x-0': menuOpen, '-translate-x-full': !menuOpen }"
    class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300"
  >
    <div
      class="flex justify-between items-center px-4 py-2 border-b border-gray-200"
    >
      <div class="text-lg font-semibold">Menu</div>
      <button @click="toggleMenu">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-col space-y-4 px-4 py-2">
      <a href="?menuId=home">Home</a>
      <a href="?menuId=investion">investion</a>
      <a href="?menuId=currency">Currency</a>
      <a href="?menuId=planing">Planing</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style scoped>
/* Add transition for smooth sidebar sliding */
.sidebar-transition {
  transition: transform 0.3s ease-in-out;
}
</style>
