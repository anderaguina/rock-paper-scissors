<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"> Rock, paper, scissors </div>
          <div class="card-body">
            <div id="game" class="text-center">
              <!-- DISPLAY GAME BUTTONS -->
              <div class="d-inline mr-3">
                <button>
                  <img src="../assets/rock.png">
                </button>
              </div>
              <div class="d-inline mr-3">
                <button>
                  <img src="../assets/paper.png">
                </button>
              </div>
              <div class="d-inline">
                <button>
                  <img src="../assets/scissors.png">
                </button>
              </div>
            </div>

            <!-- DISPLAY GAME RESULTS -->
            <div id="results">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    methods: {
      
    },
    created: function () {
      
    },
    computed: {
      
    }
  };
</script>