import { createStore } from 'vuex'

const store = createStore({
  state: {
    periodicity: false,
    infoYearly: {
      step2: {
        arcadePrice: 90,
        advancedPrice: 120,
        proPrice: 150,
      },
      step3: {
        online: 10,
        large: 20,
        custom: 20,
      },
    },
    infoMonthly: {
      step2: {
        arcadePrice: 9,
        advancedPrice: 12,
        proPrice: 15,
      },
      step3: {
        online: 1,
        large: 2,
        custom: 2,
      },
    },
    personalInfo: null,
    plan: null,
    addons: null,
  },
  getters: {
    planPrice(state) {
      if (state.periodicity) {
        const yearlyData = Object.entries(state.infoYearly.step2).map(plan => {
          return `$${plan[1]}/yr`
        })

        return yearlyData
      }

      const monthlyData = Object.entries(state.infoMonthly.step2).map(plan => {
        return `$${plan[1]}/mo`
      })

      return monthlyData
    },
    addonsPrice(state) {
      if (state.periodicity) {
        const yearlyData = Object.entries(state.infoYearly.step3).map(addon => {
          return `+$${addon[1]}/yr`
        })

        return yearlyData
      }

      const monthlyData = Object.entries(state.infoMonthly.step3).map(addon => {
        return `+$${addon[1]}/mo`
      })

      return monthlyData
    },
  },
  mutations: {
    togglePlanMode(state) {
      state.periodicity = !state.periodicity
    },
    settingPersonalInfo(state, data) {
      state.personalInfo = data
    },
    settingPlan(state, plan) {
      state.plan = plan
    },
    settingAddons(state, addons) {
      state.addons = addons
    },
  },
})

export default store
