g<template>
  <div :class="$style.todo">
    <Calendar></Calendar>
    <section :class="$style.todolist">
      <div>
        <div :class="$style.items">
          <div :class="$style.item">
            <input type="checkbox" checked id="msg_0" />
            <label :class="$style.item__checkbox" for="msg_0"></label>
            <p :class="$style.item__title">Type something</p>
          </div>
        </div>
        <div :class="$style.newTask">
          <label for="new-task">+</label>
          <input type="text" placeholder="Add new task" id="new-task" />
        </div>
      </div>
      <p :class="$style.date">
        從
        <span>19:25</span> 至
        <span>21:00</span> 結束。
      </p>
    </section>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'Todolist',
  created() {
    console.log(this.$style.items);
  },
  data() {
    return {
      Todos: [],
    };
  },
  components: { Calendar },
};
</script>

<style lang="scss" module>
@import "@/assets/sass/abstracts/_colors.scss";
@import "@/assets/sass/abstracts/_mixins.scss";

/* 最外層容器 */
.todolist {
  padding: 15px;
  background-color: $white;
  border-radius: 5px;
  min-height: 230px;
}

/* 顯示任務區塊 */
.items {
  text-align: left;
  margin-bottom: 12px;
}

/* 單項任務 */
.item {
  input[type="checkbox"] {
    display: none;
    visibility: hidden;
    &:checked {
      // 完成後的狀態
      ~ .item__checkbox {
        background: $secondary-color;
      }
      ~ .item__title {
        text-decoration: line-through;
      }
    }
  }
  &__checkbox {
    // it's a label
    @include todo-circle;
    border: 4px solid $white;
  }
  &__title {
    @include todo-base-style;
    display: inline-block;
    user-select: none;
  }
}

/* 新增代辦事項 */
.newTask {
  text-align: left;
  margin-bottom: 25px;

  label {
    @include todo-circle;
    font-size: 20px;
    color: $secondary-color;
  }
  input {
    border: 0;
    border-bottom: 1px solid $light-gray;
    border-radius: 1px;
    @include todo-base-style;

    &::placeholder {
      color: $light-gray;
    }
    &:focus {
      outline: 0;
      box-shadow: 0px 0px 3px 0px $secondary-color;
    }
  }
}

/* 顯示現在時間及結束時間 */
.date {
  border-radius: 5px;
  font-size: 16px;
  color: $deep-gray;
  padding: 5px;
  width: 50%;
  text-align: center;
  span {
    color: $black;
    font-weight: 600;
  }
}
</style>
