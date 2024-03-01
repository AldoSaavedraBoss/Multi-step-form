<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  price: number
  id: string
}>()

const { id, price } = toRefs(props)

const savingPlan = () => {
  const template = {
    name: id.value,
    price: price.value,
  }

  return JSON.stringify(template)
}
</script>

<template>
  <div class="card">
    <input type="radio" name="plan" :id="id" :value="savingPlan()" />
    <label :for="id">
      <i class="icon">
        <slot name="icon"></slot>
      </i>
      <div class="container__info">
        <h3 class="price_title"><slot name="title"></slot></h3>
        <span class="price"><slot name="price"></slot></span>
        <small class="free">2 months free</small>
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

.card input {
  appearance: none;
  position: absolute;
  background-color: var(--white);
  height: 100%;
  width: 100%;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
}

.card input:checked {
  border: 1px solid var(--purplish-blue);
}
.card label {
  position: absolute;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.price_title {
  font-weight: 700;
  color: var(--marine-blue);
}

.price {
  color: var(--cool-gray);
}

.free {
  display: none;
}

@media (min-width: 800px) {
  .card {
    height: 100%;
    flex-direction: column;
  }

  .card label {
    padding: 1rem;
  }

  .container__info {
    line-height: 1.5rem;
    margin-top: auto;
  }

  .icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .free {
    display: block;
    color: var(--marine-blue);
  }
}
</style>
