import { createStore } from "vuex";

export default createStore({
  state: {
    user: [],
    cart: [],
  },
  mutations: {
    UPDATE_user(state, payload) {
      state.user = payload;
    },
    ADD_TO_CART(state, { product, quantity }) {
      state.cart.push({
        product,
        quantity,
      });
    },
  },
  actions: {
    addTouser(context, payload) {
      const user = context.state.user;
      user.push(payload);
      context.commit("UPDATE_user", user);
    },
    addProductToCarrt({ commit }, { product, quantity }) {
      commit("ADD_TO_CART", { product, quantity });
    },
  },
  getters: {
    removeEmployeeByIndex: function (index) {
      this.user.splice(index, 1);
    },
  },
});
