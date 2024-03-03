<script setup lang="ts">
import ArcadeIcon from './icons/ArcadeIcon.vue'
import AdvancedIcon from './icons/AdvancedIcon.vue'
import ProIcon from './icons/ProIcon.vue'
import PlanCard from '@/components/PlanCard.vue'
import ToggleMode from '@/components/ToggleMode.vue'
import { computed } from 'vue'
import store from '@/store/index'
import StepTemplate from '@/layouts/StepTemplate.vue'

const periodicity = computed(() => store.state.periodicity)
const data = computed(() => {
  return periodicity.value ? store.state.infoYearly.step2 : store.state.infoMonthly.step2
})
const priceMsg = computed(() => store.getters.planPrice)

const planChecked = 'Arcade'
</script>
<template>
  <StepTemplate>
    <template #title>Select your plan</template>
    <template #subtitle>You have the option of monthly or yearly billing.</template>
    <template #content>
      <div class="container">
        <PlanCard :planChecked="planChecked" :price="data.arcadePrice" id="Arcade">
          <template #icon><ArcadeIcon /></template>
          <template #title>Arcade</template>
          <template #price>{{ priceMsg[0] }}</template>
        </PlanCard>

        <PlanCard :planChecked="planChecked" :price="data.advancedPrice" id="Advanced">
          <template #icon><AdvancedIcon /></template>
          <template #title>Advanced</template>
          <template #price>{{ priceMsg[1] }}</template>
        </PlanCard>

        <PlanCard :planChecked="planChecked" :price="data.proPrice" id="Pro">
          <template #icon><ProIcon /></template>
          <template #title>Pro</template>
          <template #price>{{ priceMsg[2] }}</template>
        </PlanCard>
      </div>
      <ToggleMode />
    </template>
  </StepTemplate>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 30px;
}

p {
  font-weight: 500;
  color: var(--cool-gray);
}

.container label {
  font-size: 12px;
  color: var(--marine-blue);
}
@media (min-width: 800px) {
  .container {
    flex-direction: row;
    min-height: 190px;
    margin: 0;
  }
}
</style>
