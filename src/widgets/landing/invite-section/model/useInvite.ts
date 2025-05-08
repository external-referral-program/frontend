import { ref } from 'vue'
import type { Data } from '@/widgets/landing/invite-section/model/invite.types'

const userData = ref<Data[]>([
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
])

const friendData = ref<Data[]>([
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
    label: 'Город',
    value: '',
    type: 'text',
    error: null,
  },
  {
    label: 'Вакансия',
    value: '',
    type: 'text',
    error: null,
  },
  {
    label: 'Ссылка на резюме',
    value: '',
    type: 'text',
    error: null,
  },
])

export const useInvite = () => {
  return { userData, friendData }
}
