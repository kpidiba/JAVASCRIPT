<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: salaire === 'salaire' }">
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      //emettre un event
      this.$emit("close");
    },
  },
  props: ["page", "price", "salaire"],
};
</script>

<!-- <style scoped> -->
<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
 .backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal.sale h1 {
  color: white;
  border: none;
  padding: 0;
}
.modal.sale {
  background: red;
  color: white;
}

.modal .actions{
    text-align: center;
    margin:30px 0 10px 0;
}

.modal .actions a{
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>