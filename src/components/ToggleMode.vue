<script setup lang="ts">
import store from '@/store/index'
</script>

<template>
  <label class="toggle" for="toggle">
    <input
      type="checkbox"
      class="toggle__input"
      name="duration"
      id="toggle"
      @click="() => store.commit('togglePlanMode')"
    />
    <span class="toggle__month">Montly</span>
    <div class="toggle__slider"></div>
    <span class="toggle__year">Yearly</span>
  </label>
</template>

<style scoped>
.toggle__input:checked + .toggle__slider + .toggle--year {
  color: var(--marine-blue);
}

.toggle {
  --width: 30px;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--height) / 1.5);
  cursor: pointer;
  display: inline-block;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  background-color: var(--magnolia);
  margin-top: 0.5rem;
}

.toggle span {
  font-size: 13px;
  color: var(--cool-gray);
}

.toggle__input {
  display: none;
}

.toggle__slider {
  position: relative;
  width: var(--width);
  height: var(--height);
  background-color: var(--marine-blue);
  border-radius: var(--border-radius);
}

.toggle__slider::after {
  content: '';
  position: absolute;
  width: calc(var(--height) / 1.5);
  height: calc(var(--height) / 1.5);
  background-color: var(--white);
  border-radius: 50%;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  transition: all 0.3s ease-out;
}

.toggle__input:checked ~ .toggle__slider::after {
  transform: translate(var(--height), -50%);
}

.toggle__input:checked ~ .toggle__year {
  color: var(--marine-blue);
}
.toggle__input:not(.toggle__input:checked) ~ .toggle__month {
  color: var(--marine-blue);
}
</style>
