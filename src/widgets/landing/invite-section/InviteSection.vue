<template>
  <section class="base-body">
    <div class="base-container">
      <h2 class="base-title">Пригласить друга</h2>
      <h3 class="base-subtitle">Контактные данные друга</h3>
      <div class="data-inputs">
        <base-input
          v-for="(data, index) in friendInputData"
          v-model="data.value"
          :type="data.type"
          :label="data.label"
          :key="index"
        />
        <base-select
          v-model="friendCityData.value"
          :label="friendCityData.label"
          :options="cityNames"
        />
        <base-select
          v-model="friendVacancyData.value"
          :label="friendVacancyData.label"
          :options="vacancyNames"
        />
      </div>
      <div class="agreements">
        <base-checkbox
          v-for="(agreement, index) in agreements"
          v-model="agreement.value"
          :label="agreement.label"
          :key="index"
        />
      </div>
      <base-button @click="clickRecommend" :disabled="!isAllAgree" text="Рекомендовать" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useCityStore } from '@/entities/city/model/store'
import { useVacancyStore } from '@/entities/vacancy/model/store'

import { computed } from 'vue'

import { BaseInput } from '@/shared/ui/input/index'
import { BaseSelect } from '@/shared/ui/select'
import { BaseCheckbox } from '@/shared/ui/checkbox'
import { BaseButton } from '@/shared/ui/button'
import { useInvite } from '@/widgets/landing/invite-section/model/useInvite'

const {
  friendInputData,
  friendCityData,
  friendVacancyData,
  agreements,
  isAllAgree,
  clickRecommend,
} = useInvite()

const cityStore = useCityStore()
const vacancyStore = useVacancyStore()

const { list: cities } = storeToRefs(cityStore)
const { list: vacancies } = storeToRefs(vacancyStore)

const cityNames = computed(() => {
  return cities.value.map((city) => city.city_name)
})

const vacancyNames = computed(() => {
  const selectedCity = friendCityData.value.value
  if (selectedCity) {
    return vacancies.value
      .filter((vacancy) => vacancy.city.city_name === selectedCity)
      .map((vacancy) => vacancy.vacancy_name)
  }
  return vacancies.value.map((vacancy) => vacancy.vacancy_name)
})
</script>

<style scoped>
.base-container {
  max-width: 45%;
}

@media (max-width: 1024px) {
  .base-container {
    max-width: 90%;
  }
}

.base-subtitle {
  margin-top: 20px;
}

.data-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.agreements {
  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 40px 0;
}
</style>
