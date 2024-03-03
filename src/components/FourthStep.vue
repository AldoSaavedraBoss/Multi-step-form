<script setup lang="ts">
import { computed } from 'vue'
import store from '@/store'

const mode = computed(() => store.state.periodicity ?? false)
const plan = computed(() => JSON.parse(store.state.plan) ?? null)
const addons = computed(() => store.state.addons ?? [])
const addonsParsed = addons.value.map(addon => JSON.parse(addon) ?? null)
const total = computed(
  () => addonsParsed.reduce((acc, curr) => acc + curr.price, 0) + plan.value.price
)
</script>

<template>
  <div class="titles">
    <h2>
      <slot name="title"></slot>
    </h2>
    <p class="subtitle">
      <slot name="subtitle"></slot>
    </p>
  </div>

  <div class="results">
    <div class="resume">
      <div class="plan--container">
        <span class="plan">{{ plan.name }} ({{ mode ? 'Yearly' : 'Monthly' }})</span>
        <div class="plan__change">
          <a>Change</a>
          <span class="plan__change__price">$ {{ plan.price }}/{{ mode ? 'yr' : 'mo' }}</span>
        </div>
      </div>
      <hr />
      <div class="products">
        <div v-for="(addon, i) in addonsParsed" :key="i" class="product">
          <span class="addon">{{ addon.name }}</span>
          <span class="addon__price">+${{ addon.price }}/{{ mode ? 'yr' : 'mo' }}</span>
        </div>
      </div>
    </div>
    <div class="total">
      <span class="label">Total (per {{ mode ? 'year' : 'month' }})</span>
      <span class="total__price">${{ total }}/{{ mode ? 'yr' : 'mo' }}</span>
    </div>
  </div>
</template>

<style scoped>
.resume {
  background-color: var(--magnolia);
  font-weight: 500;
  padding: 1rem;
  border-radius: 10px;
}

.plan--container {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
}

.plan,
.plan__change__price {
  color: var(--marine-blue);
  font-weight: 700;
}

.product,
.plan__change {
  display: flex;
  justify-content: space-between;
}

.plan__change a:hover {
  color: var(--purplish-blue);
}

hr {
  margin: 0.6rem 0;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.addon,
a,
.total .label {
  color: var(--cool-gray);
  font-weight: 500;
}

.addon__price {
  color: var(--marine-blue);
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}

.total {
  margin: 1rem 0.4rem 0 0.4rem;
  display: flex;
  justify-content: space-between;
}

.total__price {
  font-weight: 700;
  color: var(--purplish-blue);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2,
p {
  margin-bottom: 1rem;
}

h2 {
  font-weight: 700;
}

p {
  font-weight: 500;
  color: var(--cool-gray);
}
</style>
