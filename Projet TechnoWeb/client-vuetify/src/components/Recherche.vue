<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-text-field :rules="rules" label="#Restaurant"></v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field :rules="rules" label="#Page Size"></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn icon color="green">
          <v-icon>mdi-cached</v-icon>
        </v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Recherche",
  data: () => ({}),
};
</script>
