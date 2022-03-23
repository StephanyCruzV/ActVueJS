Vue.createApp({
    data() {
      return {
        information: {
          name: "===== Stephany Judith Cruz Vázquez =====",
          id: "Matrícula: [A00824927]"
        },
        interests: ["Puzzles", "Sudoku", "Crosswords", "Basketball", "Reading", "Sleep"],
        
        // variable para mensaje con v-model 
        message:'',
        
        // variable para if con boton
        done:false
      };
    }
  }).mount("#app");
  