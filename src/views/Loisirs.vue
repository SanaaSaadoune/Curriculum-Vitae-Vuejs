<template>
  <h2>Loisirs</h2>

  <form @submit.prevent="handelSubmit">
    <div class="form-group">
      <label for="Loisir1">Loisir 1</label>
      <input
        type="text"
        class="form-control"
        id="loisir1"
        placeholder="Loisir 1"
        v-model="form5.loisir1"
      />
    </div>

    <div class="form-group">
      <label for="Loisir2">Loisir 2</label>
      <input
        type="text"
        class="form-control"
        id="loisir2"
        placeholder="Loisir 2"
        v-model="form5.loisir2"
      />
    </div>

    <div class="form-group">
      <label for="Loisir3">Loisir 3</label>
      <input
        type="text"
        class="form-control"
        id="loisir3"
        placeholder="Loisir 3"
        v-model="form5.loisir3"
      />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Langues",
  data() {
    return {
      form5: {
        loisir1: "",
        loisir2: "",
        loisir3: "",
      },
    };
  },
  methods: {
    handelSubmit() {
      localStorage.setItem("form5", JSON.stringify(this.form5));
      redirect("/loisirs");
    },
  },
};
</script>
