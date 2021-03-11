<template>
  <h1 class="title text-4 mb-m">
    Todo List
  </h1>

  <div class="content mb-m">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="todo-item"
        @click="removeItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>

  <form @submit.prevent="onSubmit">
    <label for="new-todo" class="label">
      What needs to be done?
    </label>

    <div class="form-input">
      <input
        id="new-todo"
        class="control"
        :value="text"
        @change="text = $event.target.value"
      >

      <button class="button is-primary is-outlined px-m">
        Add item
      </button>
    </div>
  </form>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup () {
    const text = ref('')
    const items = reactive(
      new Set(
        JSON.parse(
          localStorage.getItem('app.todo') || '[]'
        )
      )
    )

    items.save = () => localStorage.setItem('app.todo', JSON.stringify([...items]))

    const removeItem = id => {
      items.delete(id)
      items.save()
    }

    const onSubmit = () => {
      if (text.value.length === 0) return

      items.add(text.value)
      items.save()
      text.value = ''
    }

    return {
      text,
      items,
      removeItem,
      onSubmit
    }
  }
}
</script>

<style scoped>
.form-input {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.form-input > input {
  flex: 1 1 30ch;
}

.todo-item:hover {
  cursor: pointer;
  text-decoration-line: line-through;
  text-decoration-color: var(--color-primary);
  text-decoration-thickness: 0.2ex;
}
</style>
