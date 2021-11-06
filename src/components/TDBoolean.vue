<template>
  <q-td :props="props">
    <q-chip :color="color" text-color="white">
      {{value}}
    </q-chip>
  </q-td>
</template>

<script>

import {computed, toRefs} from "vue";

export default {
  name: 'TDBoolean',
  props: {
    props: Object,
    value: Boolean,
  },
  setup(props) {
    const {value} = toRefs(props);
    const color = computed(() => value.value ? 'green' : 'red');

    return {color};
  },
}
</script>
