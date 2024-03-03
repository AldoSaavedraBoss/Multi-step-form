<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  id: string
  price: number
}>()

const { id, price } = toRefs(props)

const buildAddon = () => {
  const template = {
    name: id.value,
    price: price.value,
  }
  return JSON.stringify(template)
}
</script>

<template>
  <div class="card">
    <input type="checkbox" name="addons" :id="id" :value="buildAddon()" />
    <label :for="id" class="card__label">
      <div class="title--container">
        <p class="title__card">{{ id }}</p>
        <span class="subtitle__card"><slot name="subtitle"></slot></span>
      </div>
      <div class="price--container">
        <p class="price"><slot name="price"></slot></p>
      </div>
    </label>
  </div>
</template>

<style scoped>
.card {
  height: 70px;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
}

.card__label {
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--light-gray);
}

.title--container {
  margin-left: 3rem;
  flex-grow: 3;
}

.price--container {
  font-size: 14px;
  color: var(--cool-gray);
  text-align: end;
  margin-right: 1rem;
  width: 3.4rem;
}

.price {
  color: var(--purplish-blue);
}

input {
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.2);
}

input:checked + .card__label {
  border: 1px solid var(--purplish-blue);
  background-color: var(--magnolia);
}

input:hover + .card__label {
  border-color: var(--purplish-blue);
}

input:checked {
  accent-color: var(--purplish-blue);
}

.title__card {
  color: var(--marine-blue);
  font-weight: 700;
}

.subtitle__card {
  color: var(--cool-gray);
  font-size: 12px;
}
</style>
