<template>
  <div id="app" :class="$style.pomodoro">
    <div :class="$style.flexBasis_large">
      <section>
        <div :class="$style.pomodoro__tabs">
          <router-link
            to="/todoList"
            :class="[$style.tab, {[$style['tab--active']]: $route.name !== 'TodoList'}]"
            exact
          >
            <img src="./assets/images/list.png" />To-do list
          </router-link>
          <router-link
            to="/dashboard"
            :class="[$style.tab, {[$style['tab--active']]: $route.name !== 'Dashboard'}]"
          >
            <img src="./assets/images/bar-chart.png" />Dashboard
          </router-link>
        </div>
        <router-view :class="$style.todo" />
      </section>
      <FinishTomatoes></FinishTomatoes>
    </div>
    <AlarmClock></AlarmClock>
  </div>
</template>
<script>
import AlarmClock from '@/components/AlarmClock';
import FinishTomatoes from '@/components/FinishTomatoes';

export default {
  name: 'pomodoro',
  components: {
    AlarmClock,
    FinishTomatoes,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/main.scss";
@import "@/assets/sass/abstracts/_colors.scss";

/* main layout */
.pomodoro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  max-width: 991px;
  margin: 0 auto;
  padding: 50px 0;
  flex: 1 1 auto;

  .flexBasis_large {
    flex-basis: 55%;
  }

  &__tabs {
    position: relative;
    margin-bottom: -10px;
    z-index: 1;

    .tab {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      padding: 8px 0;
      border-radius: 10px 10px 0 0;
      box-shadow: -3px -4px 6px -6px $deep-gray, 5px -3px 6px -7px $deep-gray;
      background-color: $primary-color;

      &--active {
        background-color: $light-orange;
        box-shadow: inset 0px -4px 9px -7px $deep-gray;
      }

      img {
        max-width: 35px;
        margin-right: 20px;
      }
    }
  }
}

.todo {
  position: relative;
  padding: 25px 15px 15px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px -1px 7px -3px $deep-gray, 0px 3px 8px -9px $deep-gray;
  background-color: $primary-color;
  margin-bottom: 20px;
  min-height: 360px;
}
</style>
