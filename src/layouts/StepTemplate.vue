<template>
  <div class="titles">
    <h2>
      <slot name="title"></slot>
    </h2>
    <p class="subtitle">
      <slot name="subtitle"></slot>
    </p>
  </div>

  <div class="form">
    <slot name="content"></slot>
  </div>
</template>
<style scoped>
h2 {
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 1rem;
}

p {
  font-weight: 500;
  color: var(--cool-gray);
  margin-bottom: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
