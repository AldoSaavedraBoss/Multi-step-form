<script setup lang="ts">
import { ref } from 'vue'
import FirstStep from './components/FirstStep.vue'
import SecondStep from './components/SecondStep.vue'
import ThirthStep from './components/ThirthStep.vue'
import FourthStep from './components/FourthStep.vue'
import StepNumber from './components/StepNumbers.vue'
import store from './store'

const form = ref(null)
const step = ref<number>(1)

const handleNextStep = (e: Event) => {
  e.preventDefault()
  if (!form.value) return
  const fd = new FormData(form.value)
  if (step.value === 1) {
    const personalInfo = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
    }
    store.commit('settingPersonalInfo', personalInfo)
  }
  if (step.value === 2) {
    const plan = fd.get('plan')
    store.commit('settingPlan', plan)
  }
  if (step.value === 3) {
    const addons = fd.getAll('addons')
    store.commit('settingAddons', addons)
    // console.log('seleciona addions')
    // return
  }
  step.value++
}
</script>

<template>
  <main>
    <div class="side">
      <StepNumber :step="step" />
    </div>
    <form class="main_container" ref="form" @submit="handleNextStep">
      <FirstStep v-if="step === 1" />
      <SecondStep v-if="step === 2" />
      <ThirthStep v-if="step === 3" />
      <FourthStep v-if="step === 4">
        <template #title>Finishing up</template>
        <template #subtitle>Double-check everithing looks ok before confirming</template>
      </FourthStep>

      <div class="next_step_container">
        <span @click="step--" v-show="step > 1">Go Back</span>
        <button type="submit" v-if="step < 4">Next Step</button>
        <button type="submit" v-else>Confirm</button>
      </div>
    </form>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

body {
  background-image: url('@/assets/images/bg-sidebar-mobile.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  background-color: var(--magnolia);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_container {
  background-color: var(--white);
  padding: 1.5rem 1rem;
  margin: 2rem;
  border-radius: 0.6rem;
  min-width: 300px;
}

.next_step_container {
  background-color: var(--white);
  width: 100vw;
  padding: 0.6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}

.next_step_container span {
  color: var(--cool-gray);
  padding: 0.5rem;
  cursor: pointer;
}

.next_step_container button {
  color: var(--white);
  background-color: var(--marine-blue);
  padding: 0.6rem;
  border: none;
  border-radius: 0.3rem;
  font-weight: 500;
}

@media (min-width: 800px) {
  body {
    background-image: none;
  }

  main {
    flex-direction: row;
    align-items: center;
    height: 550px;
    min-width: 900px;
    border-radius: 0.6rem;
    background-color: var(--white);
    padding: 0.6rem;
  }

  .side {
    background-image: url('@/assets/images/bg-sidebar-desktop.svg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-color: var(--magnolia);
    height: 100%;
    min-width: 200px;
    border-radius: 0.6rem;
    flex: 1;
  }

  .main_container {
    flex: 3;
    height: 100%;
    border-radius: 0;
    margin: 0;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding-top: 3rem;
  }

  .next_step_container {
    width: 100%;
    position: static;
    margin-top: auto;
  }

  .next_step_container button {
    margin-left: auto;
  }
}
</style>
