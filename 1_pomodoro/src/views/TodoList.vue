<template>
  <div :class="$style.todo">
    <Calendar></Calendar>
    <section class="todolist">
      <div>
        <div :class="$style.todolist__items">
          <div :class="$style.item">
            <label for class="item__checkbox"></label>
            <input type="checkbox" />
            <p>Type something</p>
          </div>
        </div>
        <div :class="$style.todolist__input">
          <input type="text" placeholder="Add new task" />
        </div>
      </div>
      <div class="todolist__date">
        <!-- <input type="datetime" /> -->
        <input type="time" />
      </div>
    </section>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'Todolist',
  components: { Calendar },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";
</style>
