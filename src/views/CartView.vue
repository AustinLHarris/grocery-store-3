<template>
    <div>
        <h1> Shopping Cart </h1>
        <h2 v-if="this.$root.$data.cart.length === 0"> Cart is Empty </h2>
        <CartList :products="cart" />
        <h2 id="total"></h2>
    </div>
</template>


<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'CartView',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>