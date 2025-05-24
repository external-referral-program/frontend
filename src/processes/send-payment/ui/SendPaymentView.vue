<template>
  <form class="payment-form" @submit.prevent="handleSubmit()">
    <base-input
      v-model="inputName.value"
      :type="inputName.type"
      :label="inputName.label"
      :autocomplete="inputName.autocomplete"
      required
    />
    <base-input
      v-model="surName.value"
      :type="surName.type"
      :label="surName.label"
      :autocomplete="surName.autocomplete"
      required
    />
    <base-input
      v-model="patronymicName.value"
      :type="patronymicName.type"
      :label="patronymicName.label"
      :autocomplete="patronymicName.autocomplete"
      required
    />
    <base-select
      v-model="genderSelect.value"
      :label="genderSelect.label"
      :options="genderSelect.data"
      :autocomplete="genderSelect.autocomplete"
    />
    <div>
      Дата рождения
      <base-input
        v-model="birthDate.value"
        :type="birthDate.type"
        :autocomplete="birthDate.autocomplete"
        required
      />
    </div>
    <base-input
      v-model="birthPlace.value"
      :label="birthPlace.label"
      :type="birthPlace.type"
      required
    />
    <base-input
      v-model="passportSeries.value"
      :label="passportSeries.label"
      :type="passportSeries.type"
      required
      v-maska="'####'"
    />
    <base-input
      v-model="passportNumber.value"
      :label="passportNumber.label"
      :type="passportNumber.type"
      required
      v-maska="'######'"
    />
    <base-input
      v-model="departmentCode.value"
      :label="departmentCode.label"
      :type="departmentCode.type"
      v-maska="'###-###'"
      required
    />
    <base-input v-model="issuedBy.value" :label="issuedBy.label" :type="issuedBy.type" required />
    <div>
      Дата выдачи
      <base-input v-model="dateOfIssue.value" :type="dateOfIssue.type" required />
    </div>
    <base-input
      v-model="SNILSNumber.value"
      :label="SNILSNumber.label"
      :type="SNILSNumber.type"
      required
      v-maska="'###-###-### ##'"
    />
    <base-input
      v-model="INN.value"
      :label="INN.label"
      :type="INN.type"
      required
      v-maska="'############'"
    />
    <base-input
      v-model="BIC.value"
      :label="BIC.label"
      :type="BIC.type"
      required
      v-maska="'#########'"
    />
    <base-input v-model="bankName.value" :label="bankName.label" :type="bankName.type" required />
    <base-input
      v-model="bankBook.value"
      :label="bankBook.label"
      :type="bankBook.type"
      required
      v-maska="'##### ### # #### #######'"
    />

    <p v-if="error" class="error-text">{{ error }}</p>
    <p v-if="message" class="success-text">{{ message }}</p>
    <base-loader class="loader" v-if="loading" />
    <base-button
      v-else
      :disabled="!areAllValid"
      class="payment-button"
      text="Отправить"
      color="primary"
    />
  </form>
</template>

<script lang="ts" setup>
import { useSendPayment } from '@/processes/send-payment/model/useSendPayment'
import { BaseInput } from '@/shared/ui/input'
import { BaseButton } from '@/shared/ui/button'
import { BaseSelect } from '@/shared/ui/select'
import { BaseLoader } from '@/shared/ui/loader'

import { vMaska } from 'maska/vue'

const {
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
} = useSendPayment()

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['success'])

const handleSubmit = async () => {
  try {
    await sendData(props.userId)
    if (message.value) {
      emit('success')
    }
  } catch (error) {}
}
</script>

<style scoped>
.payment-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.payment-button {
  align-self: center;
}
</style>
