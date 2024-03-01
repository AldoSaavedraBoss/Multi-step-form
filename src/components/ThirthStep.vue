<script setup lang="ts">
import { computed } from 'vue'
import AddonCard from './AddonCard.vue'
import store from '@/store'
import StepTemplate from '@/layouts/StepTemplate.vue'

const msgs = computed(() => store.getters.addonsPrice)

const mode = computed(() => store.state.periodicity)
const prices = computed(() =>
  mode.value ? store.state.infoYearly.step3 : store.state.infoMonthly.step3
)
</script>

<template>
  <StepTemplate>
    <template #title>Picks add-ons</template>
    <template #subtitle>Add-ons help enhance your gaming experience.</template>
    <template #content>
      <AddonCard id="Online Service" :price="prices.online">
        <template #subtitle>Access to multiplayer games</template>
        <template #price>{{ msgs[0] }}</template>
      </AddonCard>
      <AddonCard id="Large Store" :price="prices.large">
        <template #subtitle>Extra 1TB of cloud save</template>
        <template #price>{{ msgs[1] }}</template>
      </AddonCard>
      <AddonCard id="Customizable Profile" :price="prices.custom">
        <template #subtitle>Custom theme on your profile</template>
        <template #price>{{ msgs[2] }}</template>
      </AddonCard>
    </template>
  </StepTemplate>
</template>

<style scoped></style>
