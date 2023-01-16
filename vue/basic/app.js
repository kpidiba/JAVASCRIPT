const app = Vue.createApp({
  /**data,eventts,events,component('render' inside the component) **/
  // template: "<i>simple page</i>", //dom: data-v-app
  data() {
    return {
      url: "https://www.google.com",
      bool: true,
      title: "hello world",
      description: "that works",
      salary: 20000,
      hide: "hide message",
      x: 0,
      y: 0,
      books: [
        { id: 1, title: "name of book", author: "DAvido", isFav: true },
        { id: 2, title: "the of book", author: "messi", isFav: false },
        { id: 3, title: "cursing of book", author: "alaba", isFav: true },
      ],
    };
  },
  methods: {
    changeSalary() {
      this.salary += 20;
      console.log("click this");
    },
    changeTitle(title) {
      this.title = title;
    },
    showMessage() {
      if (this.bool == false) {
        this.bool = !this.bool;
        this.hide = "hide message";
      } else {
        this.bool = false;
        this.hide = "show message";
      }
    },
    handleEvent(e) {
      console.log("event");
      console.log(e);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleColor(item) {
      item.isFav = !item.isFav;
    },
  },
  computed:{
    filteredBooks(){
      return this.books.filter((book)=> book.isFav);
    }
  }
}); //create vue app

/**on va dire a vue qu' on veut controller une certaine partie de la page web **/
app.mount("#app");
