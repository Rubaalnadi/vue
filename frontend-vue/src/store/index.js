import { createStore } from "vuex";

export default createStore({
  state: {
    products :[
      {
        id : 1,
        name : "prod 1",
        prodImg : "https://cdn.shopify.com/s/files/1/0066/1769/4275/products/royal_ss_crew_4f6f6c7b-c0be-4039-86ef-da55d549f45f_2048x2048.jpg?v=1565623885",
        quantity : 20,
        category : 1,
        price : 5,
        description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
      },
      {
        id : 2,
        name : "prod 2",
        prodImg : "http://cdn.shopify.com/s/files/1/0066/1769/4275/products/whiteshirtroyallogo_c1af3c83-435d-46e3-ae9f-300eaf58e920.jpg?v=1655916392",
        quantity : 10,
        category : 2,
        price : 15,
        description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'

      },
      {
        id : 3,
        name : "prod 3",
        prodImg : "https://cdn.shopify.com/s/files/1/0066/1769/4275/products/8_8c2bfc9b-94d8-42ed-b582-49029e00ffb2_300x.jpg?v=1565623869",
        quantity : 15,
        category : 3,
        price : 10,
        description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'

      },
      {
        id : 4,
        name : "prod 4",
        prodImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jHrAkKnguU70iflKPR-rlYQn11NpYiAXhVIvz5EkLpeaKAJsm5Mq2pYCgNnbFJ2wxgY&usqp=CAU",
        quantity : 40,
        category : 4,
        price : 6,
        description :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
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
    total : 0
    // cart: [],
  },
  mutations: {
    // UPDATE_user(state, payload) {
    //   state.user = payload;
    // },
    ADD_TO_CART(state, {id ,name, prodImg, category,price}) {
      state.myProducts.push({
        id,
        name,
        prodImg,
        category,
        price
      });
      state.total = state.total + price
    },
    increase(state,payload){
      state.count = state.count + payload
    },
    SET_AUTH(state,payload){
      state.isLoggedIn = payload.isAuth
    },
    ADD_TO_USER(state,{ id,email, password}){
      state.user.push({
        id,
        email, 
        password
      })
    }
  },
  actions: {
    addProductToCarrt({ commit }, { id ,name, prodImg, category,price , quantity }) {
      commit("ADD_TO_CART", { id ,name, prodImg, category , price , quantity});
    }, 
    addUser({ commit }, { id,email, password}) {
      commit("ADD_TO_USER", { id ,email, password});
    },
    login(conntext){
      conntext.commit("SET_AUTH",{isAuth:true})
    },
    logout(conntext){
      conntext.commit("SET_AUTH",{isAuth:false})
    },
    add(conntext){
      conntext.commit('increase',1)
    }
  },
  getters: {
    userIsAuthenticated(state){
      return state.isLoggedIn;
    },
    cartCount(state){
      return state.count
    }

  },
});
