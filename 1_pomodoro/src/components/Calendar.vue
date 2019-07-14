<template>
  <section :class="$style.calendar">
    <label
      v-for="(day, index) in days"
      :key="day.name"
      :class="[$style.calendar__day, {[$style['calendar__day--active']]: index == 0
      }]"
    >
      <div :class="$style.calendar__date">{{ day.date.month }} / {{ day.date.day }}</div>
      <div :class="$style.calendar__name">{{ day.name }}</div>
    </label>
  </section>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      days: [
        { date: { month: '7', day: '5' }, name: 'MON' },
        { date: { month: '7', day: '6' }, name: 'TUE' },
        { date: { month: '7', day: '7' }, name: 'WED' },
        { date: { month: '7', day: '8' }, name: 'THU' },
        { date: { month: '7', day: '9' }, name: 'FRI' },
        { date: { month: '7', day: '10' }, name: 'SAT' },
        { date: { month: '7', day: '11' }, name: 'SUN' },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";

.calendar {
  display: flex;
  justify-content: space-between;
  &__day {
    flex-basis: calc(100% / 7);
    padding: 10px;
    color: $gray;
    font-weight: 700;
    border: 1px solid $light-gray;
    border-radius: 5px;
    cursor: pointer;

    &--active {
      background: $light-orange;
      color: $black;
      border: none;
    }
  }
  &__day + &__day {
    margin-left: 1%;
  }
  &__date {
  }
  &__name {
  }
}
</style>
