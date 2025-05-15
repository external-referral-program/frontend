<template>
  <div class="home-view-body">
    <recommend-section />
    <steps-for-recommend />
    <people-section />
    <asked-questions :id="SECTION_IDS.QUESTIONS" />
    <vacancy-section :id="SECTION_IDS.VACANCIES" />
    <invite-section :id="SECTION_IDS.RECOMMEND" />
  </div>
</template>

<script lang="ts" setup>
import { RecommendSection } from '@/widgets/landing/recommend-section'
import { StepsForRecommend } from '@/widgets/landing/steps-for-recommend'
import { PeopleSection } from '@/widgets/landing/people-section'
import { AskedQuestions } from '@/widgets/landing/asked-questions'
import { VacancySection } from '@/widgets/landing/vacancy-section'
import { InviteSection } from '@/widgets/landing/invite-section'

import { SECTION_IDS } from '@/shared/ui/sections/sectionIds'
</script>

<style scoped>
.home-view-body {
  display: flex;
  flex-direction: column;
}
</style>
