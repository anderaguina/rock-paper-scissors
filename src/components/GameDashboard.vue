<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"> Rock, paper, scissors </div>
          <div class="card-body">
            Select an option to play!
            <div id="game" class="text-center">
              <!-- DISPLAY GAME BUTTONS -->
              <div id="rock" class="d-inline mr-3">
                <button v-on:click="play(0)">
                  <img src="../assets/rock.png">
                </button>
              </div>
              <div id="paper" class="d-inline mr-3">
                <button v-on:click="play(1)">
                  <img src="../assets/paper.png">
                </button>
              </div>
              <div id="scissors" class="d-inline">
                <button v-on:click="play(2)">
                  <img src="../assets/scissors.png">
                </button>
              </div>
            </div>

            <!-- DISPLAY MATCH -->
            <div id="match" v-if="matching">
              <h4> Match </h4>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"> Your option</th>
                    <th scope="col"> Computer option </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <span> You have selected {{userOption}} </span>
                    </td>
                    <td>
                      <span> Computer has selected {{computerOption}} </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- DISPLAY GAME RESULTS -->
            <div id="results">
              <h4> Results </h4>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">  </th>
                    <th scope="col"> Score </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"> You </th>
                    <td> {{user.data.displayName}}'s score is {{userScore}} </td>
                  </tr>
                  <tr>
                    <th scope="row"> Computer </th>
                    <td> User score is {{computerScore}} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        userScore: 0,
        computerScore: 0,
        userOption: "",
        computerOption: "",
        matching: false,
        userSelectedOption: 0,
        computerSelectedOption: 0,
      }
    },
    methods: {
      play(option) {
        this.userSelectedOption = option;
        console.log("OPTION ", option);
        let computerOption = this.generateComputerOption();
        this.computerSelectedOption = computerOption;
        this.showMatch();
        
        setTimeout(this.resolveMatchup, 1000);
      },
      generateComputerOption() {
        let random = Math.floor(Math.random() * 3);
        return random;        
      },
      showMatch() {
        this.matching = true;
        let options = ["Rock", "Paper", "Scissors"]

        this.userOption = options[this.userSelectedOption];
        this.computerOption = options[this.computerSelectedOption];        
      },

      resolveMatchup() {
        this.matching = false;
        if (this.userSelectedOption == 0) {
          if (this.computerSelectedOption == 1) {
            alert("OH NO, YOU LOSE!");
            this.computerScore++;
          } else if (this.computerSelectedOption == 2){
            alert("CONGRATULATIONS!");
            this.userScore++;
          } else {
            alert("IT'S A DRAW!");
          }
        } else if (this.userSelectedOption == 1) {
          if (this.computerSelectedOption == 2) {
            alert("OH NO, YOU LOSE!");
            this.computerScore++;
          } else if (this.computerSelectedOption == 0){
            alert("CONGRATULATIONS!");
            this.userScore++;
          } else {
            alert("IT'S A DRAW!");
          }
        } else {
          if (this.computerSelectedOption == 0) {
            alert("OH NO, YOU LOSE!");
            this.computerScore++;
          } else if (this.computerSelectedOption == 1){
            alert("CONGRATULATIONS!");
            this.userScore++;
          } else {
            alert("IT'S A DRAW!");
          }
        } 
      }
    },
    created: function () {
      
    },
    computed: {
      ...mapGetters({
        // map `this.user` to `this.$store.getters.user`
        user: "user"
    })
    }
  };
</script>