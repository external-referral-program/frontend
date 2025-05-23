import { storeToRefs } from 'pinia'
import { useCityStore } from '@/entities/city/model/store'
import { useVacancyStore } from '@/entities/vacancy/model/store'
import { recommendReferral } from '@/entities/user/model/user.api'

import { computed, ref, watch } from 'vue'
import type {
  ICityData,
  IInputData,
  IVacancyData,
} from '@/widgets/landing/invite-section/model/invite.types'
import type { IRecommendData } from '@/entities/user/model/types'
import type { IVacancy } from '@/entities/vacancy/model/types'

const friendNameInputData = ref({
  nameLabel: 'Имя',
  surnameLabel: 'Фамилия',
  patronymicNameLabel: 'Отчество',
  nameValue: '',
  surnameValue: '',
  patronymicNameValue: '',
  type: 'text',
  autocomplete: 'name',
  error: 'Неправильно указано ФИО',
})

const friendTelInputData = ref<IInputData>({
  label: 'Номер телефона',
  value: '',
  type: 'tel',
  autocomplete: 'tel',
  error: 'Некорректный формат телефона',
})

const friendEmailInputData = ref<IInputData>({
  label: 'Электронная почта',
  value: '',
  type: 'email',
  autocomplete: 'email',
  error: 'Некорректный формат почты',
})

const friendCityData = ref<ICityData>({
  label: 'Город (Не выбрано)',
  value: '',
  error: null,
  data: null,
})

const friendVacancyData = ref<IVacancyData>({
  label: 'Вакансия (Не выбрано)',
  value: '',
  error: null,
  data: null,
})

const agreements = ref([
  {
    label:
      'Ознакомлен с <a href="/docs/ProgramRules.pdf" download target="_blank" class="link">правилами</a> программы',
    value: false,
  },
  {
    label:
      'Я подтверждаю, что мной получено <span class="link">согласие</span> друга на передачу его персональных данных',
    value: false,
  },
  {
    label:
      'Я подтверждаю, что согласен на обработку своих <a href="/docs/PrivacyPolicy.pdf" download target="_blank" class="link">персональных данных</a>',
    value: false,
  },
  {
    label: 'Подтверждаю, что мне исполнилось 18 лет',
    value: false,
  },
])

const telLength = 11

const areAllAgree = computed(() => {
  return agreements.value.every((agreement) => agreement.value)
})

const isTelValid = computed(() => {
  return (
    friendTelInputData.value.value !== '' &&
    friendTelInputData.value.value.trim().length === telLength
  )
})

const isEmailValid = computed(() => {
  return friendEmailInputData.value.value !== '' && friendEmailInputData.value.value.includes('@')
})

const isFullNameValid = computed(() => {
  return (
    friendNameInputData.value.nameValue !== '' &&
    friendNameInputData.value.surnameValue !== '' &&
    friendNameInputData.value.patronymicNameValue !== ''
  )
})

const areInputsValid = computed(() => {
  return (
    isFullNameValid.value &&
    friendTelInputData.value.value !== '' &&
    friendEmailInputData.value.value !== ''
  )
})

const areAllValid = computed(() => {
  return (
    isTelValid.value &&
    isEmailValid &&
    areAllAgree.value &&
    areInputsValid.value &&
    friendCityData.value.value !== '' &&
    friendVacancyData.value.value !== ''
  )
})

const clearAllFields = () => {
  friendNameInputData.value.nameValue = ''
  friendNameInputData.value.surnameValue = ''
  friendNameInputData.value.patronymicNameValue = ''
  friendTelInputData.value.value = ''
  friendEmailInputData.value.value = ''
  friendCityData.value.value = ''
  friendVacancyData.value.value = ''

  agreements.value.forEach((agreement) => {
    agreement.value = false
  })
}

const getVacancyIdByName = (name: string, vacancies: IVacancy[]) => {
  return vacancies.find((vacancy) => vacancy.vacancy_name === name)?.id
}

export const useRecommend = () => {
  const cityStore = useCityStore()
  const vacancyStore = useVacancyStore()

  const isSuccess = ref(false)
  const loading = ref(false)
  const error = ref<Error | null>(null)

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

  watch(
    () => friendVacancyData.value.value,
    () => {
      if (friendVacancyData.value.value) {
        const selectedVacancy = vacancies.value.find(
          (vacancy) => vacancy.vacancy_name === friendVacancyData.value.value,
        )
        if (selectedVacancy) {
          friendCityData.value.value = selectedVacancy.city.city_name
        }
      }
    },
  )

  watch(
    () => friendCityData.value.value,
    () => {
      if (!friendCityData.value.value) {
        friendVacancyData.value.value = ''
      }
    },
  )

  const clickRecommend = async () => {
    if (!areAllValid.value) return

    const vacancyId = getVacancyIdByName(friendVacancyData.value.value, vacancies.value)

    if (!vacancyId) return

    isSuccess.value = false
    error.value = null
    loading.value = true

    const data: IRecommendData = {
      name: friendNameInputData.value.nameValue.trim(),
      surname: friendNameInputData.value.surnameValue.trim(),
      patronymic_name: friendNameInputData.value.patronymicNameValue.trim(),
      phone_number: friendTelInputData.value.value.trim(),
      email: friendEmailInputData.value.value.trim(),
      city_name: friendCityData.value.value.trim(),
      vacancy: vacancyId,
    }

    try {
      const resp = await recommendReferral(data)
      clearAllFields()
      console.log(resp, 'resp')
      isSuccess.value = true
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return {
    isSuccess,
    isTelValid,
    isEmailValid,
    friendCityData,
    friendVacancyData,
    agreements,
    clickRecommend,
    cityNames,
    vacancyNames,
    areAllValid,
    friendNameInputData,
    friendTelInputData,
    friendEmailInputData,
    loading,
    error,
  }
}
