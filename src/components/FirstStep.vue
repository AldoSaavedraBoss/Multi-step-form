<script setup lang="ts">
import StepTemplate from '@/layouts/StepTemplate.vue'
</script>
<template>
  <StepTemplate>
    <template #title>Personal Info</template>
    <template #subtitle>Please provide your name, email address, and phone number.</template>
    <template #content>
      <div class="input_group">
        <label for="name">Name</label>
        <input class="input" type="text" name="name" id="name" placeholder="e.g Stephen King" />
      </div>
      <div class="input_group">
        <label for="email">Email Address</label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
        />
      </div>
      <div class="input_group">
        <label for="phone">Phone Number</label>
        <input
          class="input"
          type="tel"
          pattern="^\+1\d{10}$"
          name="phone"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />
      </div>
    </template>
  </StepTemplate>
</template>

<style scoped>
.input_group {
  display: flex;
  flex-direction: column;
}

.form label {
  font-size: 12px;
  color: var(--marine-blue);
}

.input {
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
}
</style>
