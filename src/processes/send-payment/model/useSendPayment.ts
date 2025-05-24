import { useUserStore } from '@/entities/user/model/store'
import type { IPaymentData } from '@/entities/user/model/types'
import { sendPayment } from '@/entities/user/model/user.api'
import { computed, onMounted, ref } from 'vue'

const genders = ['муж.', 'жен.']

const inputName = ref({
  label: 'Имя',
  value: '',
  type: 'text',
  autocomplete: 'name',
  error: 'Неправильно указано Имя',
})

const surName = ref({
  label: 'Фамилия',
  value: '',
  type: 'text',
  autocomplete: 'name',
  error: 'Неправильно указана Фамилия',
})

const patronymicName = ref({
  label: 'Отчество',
  value: '',
  type: 'text',
  autocomplete: 'name',
  error: 'Неправильно указано Отчество',
})

const genderSelect = ref({
  label: 'Пол (Не выбрано)',
  value: '',
  data: genders,
  autocomplete: 'sex',
})

const birthDate = ref({
  label: 'Дата рождения',
  value: '',
  type: 'date',
  autocomplete: 'bday',
})

const birthPlace = ref({
  label: 'Место рождения',
  value: '',
  type: 'text',
})

const issuedBy = ref({
  label: 'Кем выдан',
  value: '',
  type: 'text',
})

const dateOfIssue = ref({
  label: 'Дата выдачи',
  value: '',
  type: 'date',
})

const departmentCode = ref({
  label: 'Код подразделения',
  value: '',
  type: 'text',
})

const passportSeries = ref({
  label: 'Серия паспорта',
  value: '',
  type: 'text',
})

const passportNumber = ref({
  label: 'Номер паспорта',
  value: '',
  type: 'text',
})

const SNILSNumber = ref({
  label: 'Номер СНИЛС',
  value: '',
  type: 'text',
})

const INN = ref({
  label: 'ИНН',
  value: '',
  type: 'text',
})

const BIC = ref({
  label: 'БИК',
  value: '',
  type: 'text',
})

const bankName = ref({
  label: 'Название банка',
  value: '',
  type: 'text',
})

const bankBook = ref({
  label: 'Номер счета',
  value: '',
  type: 'text',
})

const getNameChunks = (name: string) => {
  return name.split(' ')
}

const setNameChunks = (fullName: string) => {
  inputName.value.value = getNameChunks(fullName)[0]
  surName.value.value = getNameChunks(fullName)[1]
  patronymicName.value.value = getNameChunks(fullName)[2]
}

const isFullNameValid = computed(() => {
  return (
    inputName.value.value !== '' && surName.value.value !== '' && patronymicName.value.value !== ''
  )
})

const isDepartmentCodeValid = computed(() => {
  return /^\d{3}-\d{3}$/.test(departmentCode.value.value)
})

const isPassportSeriesValid = computed(() => {
  return passportSeries.value.value.length === 4
})

const isPassportNumberValid = computed(() => {
  return passportNumber.value.value.length === 6
})

const isSNILSValid = computed(() => {
  return /^\d{3}-\d{3}-\d{3} \d{2}$/.test(SNILSNumber.value.value)
})

const isBankBookValid = computed(() => {
  return /^\d{5} \d{3} \d{1} \d{4} \d{7}$/.test(bankBook.value.value)
})

const areAllValid = computed(() => {
  return (
    isDepartmentCodeValid.value &&
    isPassportSeriesValid.value &&
    isPassportNumberValid.value &&
    isSNILSValid.value &&
    isBankBookValid.value &&
    isFullNameValid.value &&
    genderSelect.value.value !== '' &&
    birthDate.value.value !== '' &&
    birthPlace.value.value !== '' &&
    issuedBy.value.value !== '' &&
    dateOfIssue.value.value !== '' &&
    bankName.value.value !== ''
  )
})

const clearAll = () => {
  inputName.value.value = ''
  surName.value.value = ''
  patronymicName.value.value = ''
  genderSelect.value.value = ''
  birthDate.value.value = ''
  birthPlace.value.value = ''
  issuedBy.value.value = ''
  dateOfIssue.value.value = ''
  departmentCode.value.value = ''
  passportSeries.value.value = ''
  passportNumber.value.value = ''
  SNILSNumber.value.value = ''
  INN.value.value = ''
  BIC.value.value = ''
  bankName.value.value = ''
  bankBook.value.value = ''
}

export const useSendPayment = () => {
  const { user } = useUserStore()
  const message = ref('')
  const error = ref<Error | null>(null)
  const loading = ref(false)

  onMounted(() => {
    if (!user) return
    setNameChunks(user.full_name)
  })

  const sendData = async (userId: string) => {
    loading.value = true
    error.value = null
    message.value = ''

    const data: IPaymentData = {
      name: inputName.value.value,
      surname: surName.value.value,
      patronymic_name: patronymicName.value.value,
      gender: genderSelect.value.value,
      birth_date: birthDate.value.value,
      birth_place: birthPlace.value.value,
      issued_by: issuedBy.value.value,
      date_of_issue: dateOfIssue.value.value,
      department_code: departmentCode.value.value,
      passport_series: passportSeries.value.value,
      passport_number: passportNumber.value.value,
      SNILS_number: SNILSNumber.value.value,
      INN: INN.value.value,
      BIC: BIC.value.value,
      bank_name: bankName.value.value,
      bank_book: bankBook.value.value,
    }

    try {
      const res = await sendPayment(data, userId)
      message.value = 'Данные отправлены'
      clearAll()
      console.log(res)
    } catch (e) {
      error.value = e as Error
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {
    inputName,
    surName,
    patronymicName,
    genderSelect,
    birthDate,
    birthPlace,
    issuedBy,
    dateOfIssue,
    departmentCode,
    passportSeries,
    passportNumber,
    SNILSNumber,
    INN,
    BIC,
    bankName,
    bankBook,
    sendData,
    areAllValid,
    loading,
    error,
    message,
  }
}
