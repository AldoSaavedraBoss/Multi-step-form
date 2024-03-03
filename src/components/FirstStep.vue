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
        <span>This field is required</span>
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
        <span>This field is required</span>
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
        <span>This field is required</span>
      </div>
    </template>
  </StepTemplate>
</template>

<style scoped>
.input_group {
  display: flex;
  flex-direction: column;
}

.input_group span {
  color: var(--strawberry-red);
  font-size: 14px;
  text-align: right;
  font-weight: 700;
  margin-top: 0.5rem;
  visibility: hidden;
}

.input {
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.2rem;
}
</style>
