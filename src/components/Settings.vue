<template>
  <h1>Settings</h1>
  <v-list>
    <v-list-item-group>
      <v-list-item>
        <v-checkbox
          v-model="settingList"
          hide-details
          label="Checkbox 1"
          value="All"
        ></v-checkbox>
      </v-list-item>
      <v-list-item>
        <v-checkbox
          v-model="settingList"
          hide-details
          label="Checkbox 2"
          value="1"
        ></v-checkbox>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  {{ settingList.toString() }}
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      checkbox: true,
      settingList: []
    }
  },
  methods: {}
}
</script>