<template>
  <div>
    <h1 v-if="user">Welcome, {{ user.displayName }}</h1>
  </div>
</template>

<script>
export default { props: ["user"] };
</script>

<style lang="scss" scoped></style>
