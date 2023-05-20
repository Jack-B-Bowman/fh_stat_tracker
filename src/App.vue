<template>
  
  <input id="name_field" type="text" placeholder="Username" >
  <select id="platform_select">
    <option value="">--Platform--</option>
    <option value="psn">Playstation</option>
    <option value="xbl">Xbox</option>
    <option value="uplay">PC</option>
  </select>
  <div>
    <button @click="get_user()" id="go_button">GO</button>
  </div>
  <div class="data_selector">
    <button data-bs-toggle="collapse" data-bs-target="#overview-data">OVERVIEW</button>
    <button data-bs-toggle="collapse" data-bs-target="#hero-data">HEROES</button>
    <button data-bs-toggle="collapse" data-bs-target="#mode-data">MODES</button>
  </div>
  <div id="result_container">
    <overview_results class="segment" id="overview-data" name="TOTAL STATS" :player_data="overview_data"></overview_results>
    <heroes_results class="collapse segment" id="hero-data" :hero_data="hero_data"></heroes_results>
    <modes_results class="collapse segment" id="mode-data" :mode_data="mode_data"></modes_results>

  </div>
  
</template>

<script>
import heroes_results from "@/components/heroes_results.vue";
import modes_results from "@/components/modes_results.vue";
import overview_results from "@/components/overview_results.vue";



export default {
  components: {
    heroes_results,
    modes_results,
    overview_results,
  },
  name: 'App',

  data() {
    return {
      player_data: {},
      overview_data: {
        "name" : "",
        "wins" : 0,
        "losses": 0,
        "kills" : 0,
        "deaths": 0,
        "assists": 0,
        "timePlayed" : 0
      },
      hero_data: {},
      mode_data: {},
    }
  },

  methods: {
    async  get_user(){ 
      this.player_data = {};
      this.overview_data = {
        "name" : "",
        "wins" : 0,
        "losses": 0,
        "kills" : 0,
        "deaths": 0,
        "assists": 0,
        "timePlayed" : 0
      };
      this.hero_data = {};
      this.mode_data = {};
      console.log("test")
      const username = document.getElementById('name_field').value;
      const platform = document.getElementById('platform_select').value;
      const response = await fetch(`https://us-east-2.aws.data.mongodb-api.com/app/data-drnuw/endpoint/user?username=${username}&platform=${platform}`);
      const jsonData = await response.json(); 
      this.player_data = await jsonData;
      var new_hero_data = this.player_data["new"]["hero"];
      var old_hero_data = this.player_data["old"]["hero"];
      var hero_names = Object.keys(new_hero_data);
      this.overview_data["name"] = this.player_data["_id"];
      hero_names.forEach(name => {

        try {
          this.overview_data["wins"] += (new_hero_data[name]["wins"] - old_hero_data[name]["wins"]);
        } catch (error) {
          this.overview_data["wins"] += new_hero_data[name]["wins"];
        }

        try {
          this.overview_data["losses"] += (new_hero_data[name]["losses"] - old_hero_data[name]["losses"]);
        } catch (error) {
          this.overview_data["losses"] += new_hero_data[name]["losses"];
        }

        try {
          this.overview_data["kills"] += (new_hero_data[name]["kills"] - old_hero_data[name]["kills"]);
        } catch (error) {
          this.overview_data["kills"] += new_hero_data[name]["kills"];
        }

        try {
          this.overview_data["deaths"] += (new_hero_data[name]["deaths"] - old_hero_data[name]["deaths"]);
        } catch (error) {
          this.overview_data["deaths"] += new_hero_data[name]["deaths"];
        }

        try {
          this.overview_data["assists"] += (new_hero_data[name]["assists"] - old_hero_data[name]["assists"]);
        } catch (error) {
          this.overview_data["assists"] += new_hero_data[name]["assists"];
        }

        try {
          this.overview_data["timePlayed"] += (new_hero_data[name]["time_played"] - old_hero_data[name]["time_played"]);
        } catch (error) {
          this.overview_data["timePlayed"] += new_hero_data[name]["time_played"];
        }

        this.hero_data[name] = {};

        try {
          this.hero_data[name]["wins"] = (new_hero_data[name]["wins"] - old_hero_data[name]["wins"]);
        } catch (error) {
          this.hero_data[name]["wins"] = new_hero_data[name]["wins"];
        }

        try {
          this.hero_data[name]["losses"] = (new_hero_data[name]["losses"] - old_hero_data[name]["losses"]);
        } catch (error) {
          this.hero_data[name]["losses"] = new_hero_data[name]["losses"];
        }

        try {
          this.hero_data[name]["kills"] = (new_hero_data[name]["kills"] - old_hero_data[name]["kills"]);
        } catch (error) {
          this.hero_data[name]["kills"] = new_hero_data[name]["kills"];
        }

        try {
          this.hero_data[name]["deaths"] = (new_hero_data[name]["deaths"] - old_hero_data[name]["deaths"]);
        } catch (error) {
          this.hero_data[name]["deaths"] = new_hero_data[name]["deaths"];
        }

        try {
          this.hero_data[name]["assists"] = (new_hero_data[name]["assists"] - old_hero_data[name]["assists"]);
        } catch (error) {
          this.hero_data[name]["assists"] = new_hero_data[name]["assists"];
        }

        try {
          this.hero_data[name]["timePlayed"] = (new_hero_data[name]["time_played"] - old_hero_data[name]["time_played"]);
        } catch (error) {
          this.hero_data[name]["timePlayed"] = new_hero_data[name]["time_played"];
        }
      });

      var new_mode_data = this.player_data["new"]["mode"];
      var old_mode_data = this.player_data["old"]["mode"];
      var mode_names = Object.keys(new_mode_data);

      mode_names.forEach(name => {
        this.mode_data[name] = {};
        try {
          this.mode_data[name]["wins"] = (new_mode_data[name]["wins"] - old_mode_data[name]["wins"]);
        } catch (error) {
          this.mode_data[name]["wins"] = new_mode_data[name]["wins"];
        }

        try {
          this.mode_data[name]["losses"] = (new_mode_data[name]["losses"] - old_mode_data[name]["losses"]);
        } catch (error) {
          this.mode_data[name]["losses"] = new_mode_data[name]["losses"];
        }

        try {
          this.mode_data[name]["kills"] = (new_mode_data[name]["kills"] - old_mode_data[name]["kills"]);
        } catch (error) {
          this.mode_data[name]["kills"] = new_mode_data[name]["kills"];
        }

        try {
          this.mode_data[name]["deaths"] = (new_mode_data[name]["deaths"] - old_mode_data[name]["deaths"]);
        } catch (error) {
          this.mode_data[name]["deaths"] = new_mode_data[name]["deaths"];
        }

        try {
          this.mode_data[name]["assists"] = (new_mode_data[name]["assists"] - old_mode_data[name]["assists"]);
        } catch (error) {
          this.mode_data[name]["assists"] = new_mode_data[name]["assists"];
        }

        try {
          this.mode_data[name]["timePlayed"] = (new_mode_data[name]["time_played"] - old_mode_data[name]["time_played"]);
        } catch (error) {
          this.mode_data[name]["timePlayed"] = new_mode_data[name]["time_played"];
        }
        });

      console.log(this.overview_data["wins"]);
      console.log(this.overview_data["losses"]);
      console.log(this.overview_data["kills"]);
      console.log(this.overview_data["deaths"]);
      console.log(this.overview_data["assists"]);
      console.log(this.overview_data["timePlayed"]);
      console.log(this.hero_data);
      console.log(this.mode_data);
    }

  }
}

</script>

<style>
@font-face {
    font-family: 'conduit_itc_blackregular';
    src: url('assets/conduit-itc-black-webfont.woff2') format('woff2'),
         url('assets/conduit-itc-black-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
html {
  background-color: #1f1f21; 
}
body {
  font-family: "OpenSans",Helvetica,Arial,sans-serif;
  height: 100%;
  overflow-x: hidden;
  background-color: #1f1f21; 
  left: 0;
  top: 0;
  width: 100%;
  overflow: scroll; 
}


.flex-container {
  display: flex;
  flex-direction: column;
}
.header {
  font-family: "conduit_itc_blackregular";
}
.left {
  flex-basis: 33.333%;
  padding-right: 20px;
}
.data_selector {
  margin: 20px auto 10px auto;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  max-width: 500px;
}
.data_selector button {
  font-family: "conduit_itc_blackregular";
	/* padding: 14px 20px; */
  width: 120px;
  height: 40px;
	text-decoration: none;
	text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: 2px solid white;
}
.segment {
  padding-bottom: 20px;
}
#app {
  font-family: 'OpenSans', Calibri, Trebuchet, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1f1f21; 
  text-align: center;
  color: white;
  margin-top: 60px;
}
#result_body{
  display: flex;
  flex-direction: row;
  justify-content: left
}
#go_button{
  font-family: "conduit_itc_blackregular";
  margin-top: 1%;
  width: 60px;
  background-color: transparent;
  color: white;
  border: 2px solid white;

}
#name_field {
  margin-right: 10px;
}

</style>
 