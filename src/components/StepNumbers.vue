<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<template>
  <div class="container--steps">
    <div class="steps">
      <span :class="{ active: 1 === step, number: true }">1</span>
      <div class="steps__info">
        <span>STEP 1</span>
        <p>YOUR INFO</p>
      </div>
    </div>
    <div class="steps">
      <span :class="{ active: 2 === step, number: true }">2</span>
      <div class="steps__info">
        <span>STEP 2</span>
        <p>SELECT PLAN</p>
      </div>
    </div>
    <div class="steps">
      <span :class="{ active: 3 === step, number: true }">3</span>
      <div class="steps__info">
        <span>STEP 3</span>
        <p>ADD-ONS</p>
      </div>
    </div>
    <div class="steps">
      <span :class="{ active: 4 === step, number: true }">4</span>
      <div class="steps__info">
        <span>STEP 4</span>
        <p>SUMMARY</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container--steps {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 3rem;
}

.steps {
  display: flex;
  color: var(--white);
  gap: 1rem;
  align-items: center;
}

.steps__info {
  display: none;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 100%;
  width: 1.8rem;
  height: 1.8rem;
}

.active {
  background-color: var(--light-blue);
  color: var(--marine-blue) !important;
}

@media (min-width: 800px) {
  .container--steps {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .steps {
    width: 150px;
  }

  .steps__info {
    display: block;
  }

  .steps__info span,
  p {
    font-size: 14px;
  }

  .steps__info span {
    font-weight: 400;
  }
}
</style>
