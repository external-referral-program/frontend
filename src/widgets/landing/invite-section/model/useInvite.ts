import { computed, ref } from 'vue'
import type {
  ICityData,
  IInputData,
  IVacancyData,
} from '@/widgets/landing/invite-section/model/invite.types'

const friendInputData = ref<IInputData[]>([
  {
    label: 'ФИО',
    value: '',
    type: 'text',
    error: null,
  },
  {
    label: 'Номер телефона',
    value: '',
    type: 'tel',
    error: null,
  },
  {
    label: 'Электронная почта',
    value: '',
    type: 'email',
    error: null,
  },
  {
    label: 'Ссылка на резюме',
    value: '',
    type: 'text',
    error: null,
  },
])

const friendCityData = ref<ICityData>({
  label: 'Город',
  value: '',
  error: null,
  data: null,
})

const friendVacancyData = ref<IVacancyData>({
  label: 'Вакансия',
  value: '',
  error: null,
  data: null,
})

const agreements = ref([
  {
    label: 'Ознакомлен с правилами программы',
    value: false,
  },
  {
    label: 'Я подтверждаю, что мной получено согласие друга на передачу его персональных данных',
    value: false,
  },
  {
    label: 'Я подтверждаю, что согласен на обработку своих персональных данных',
    value: false,
  },
  {
    label: 'Подтверждаю, что мне исполнилось 18 лет',
    value: false,
  },
])

const isAllAgree = computed(() => {
  return agreements.value.every((agreement) => agreement.value)
})

const clickRecommend = () => {
  if (isAllAgree.value) console.log('all agree')
}

export const useInvite = () => {
  return {
    friendInputData,
    friendCityData,
    friendVacancyData,
    agreements,
    isAllAgree,
    clickRecommend,
  }
}

// todo: города, вакансии с бэка
