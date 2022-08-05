import { createStore } from "vuex";

export default createStore({
  state: {
    products :[
      {
        id : 1,
        name : "prod 1",
        prodImg : "https://cdn.shopify.com/s/files/1/0066/1769/4275/products/royal_ss_crew_4f6f6c7b-c0be-4039-86ef-da55d549f45f_2048x2048.jpg?v=1565623885",
        quantity : 20,
        category : 1
      },
      {
        id : 2,
        name : "prod 2",
        prodImg : "http://cdn.shopify.com/s/files/1/0066/1769/4275/products/whiteshirtroyallogo_c1af3c83-435d-46e3-ae9f-300eaf58e920.jpg?v=1655916392",
        quantity : 10,
        category : 2
      },
      {
        id : 3,
        name : "prod 3",
        prodImg : "https://cdn.shopify.com/s/files/1/0066/1769/4275/products/8_8c2bfc9b-94d8-42ed-b582-49029e00ffb2_300x.jpg?v=1565623869",
        quantity : 15,
        category : 3
      },
      {
        id : 4,
        name : "prod 4",
        prodImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jHrAkKnguU70iflKPR-rlYQn11NpYiAXhVIvz5EkLpeaKAJsm5Mq2pYCgNnbFJ2wxgY&usqp=CAU",
        quantity : 40,
        category : 4
      },
    ],
    myProducts : [],//chart
    category : [1,2,3,4] ,
    user: [
      {
        id : 1,
        email:"rubaalanadi@gmail.com",
        password : "123"
      },
      {
        id : 2,
        email:"rubaalanadi5@gmail.com",
        password : "12345"
      }
    ],
    count : 0,
    isLoggedIn : false,
    // cart: [],
  },
  mutations: {
    // UPDATE_user(state, payload) {
    //   state.user = payload;
    // },
    ADD_TO_CART(state, {id ,name, prodImg, category }) {
      state.myProducts.push({
        id,
        name,
        prodImg,
        category
      });
    },
    increase(state){
      state.count = state.count +1
    },
    setAuth(state,payload){
      state.isLoggedIn = payload.isAuth
    }
  },
  actions: {
    // addTouser(context, payload) {
    //   const user = context.state.user;
    //   user.push(payload);
    //   context.commit("UPDATE_user", user);
    // },
    addProductToCarrt({ commit }, { id ,name, prodImg, category  }) {
      commit("ADD_TO_CART", { id ,name, prodImg, category });
    },
    login(conntext){
      conntext.commit("setAuth",{isAuth:true})
    },
    logout(conntext){
      conntext.commit("setAuth",{isAuth:false})
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.isLoggedIn;
    }

  },
});
