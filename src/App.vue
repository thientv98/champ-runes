<template>
    <div id="app">
        <Language />
        <div id="nav">
            <div class="src d-flex justify-content-center">
              <samp class="mr-1"><b><router-link to="/">{{$t('home.champions_statistics')}}</router-link></b></samp>
              <samp class="ml-1"><b><router-link to="/path">{{$t('home.patch_note')}}</router-link></b></samp>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import Language from "@/components/language";
import x from "@/data/z/mapData.js";
// import matchup from '@/data/z/matchup.js'
import { auth, messaging } from './firebase'

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BHO3j_LAcktHgXP39bAEw82dBz4Hud8NGTU3IpvICh3sVt_iooMNxB-yZHmulJRDRhtPF2xf98-5qhf7yBgLwLs' }).then((currentToken) => {
  if (currentToken) {
    console.log('TOKEN RECEIVED');
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
export default {
    components: { Language },
    mounted() {
      // console.log(x.getItems());

      // GET/ SET locale
      const lang = localStorage.getItem('lang')
      if (lang) {
        this.$store.dispatch('changeLang', lang)
      } else {
        const currentLang = this.$store.getters.language
        localStorage.setItem('lang', currentLang)
      }
      // GET/SET hot-pick champion
      const hotPick =  localStorage.getItem('most-choose')
      if(hotPick) {
        this.$store.dispatch('setHotPickFromStore', JSON.parse(hotPick))
      }
    }
};
</script>
<style lang="scss" scoped>
#nav {
  position: relative;
  .src {
    margin-left: 120px;
    @media only screen and (max-width: 420px) {
      // width: 100px;
      margin-left: 50px;
    }
    @media only screen and (max-width: 328px) {
      margin-left: 35px;
    }
  }
}
a {
    &.router-link-exact-active {
        color: #42b983 !important;
        background-color: black;
    }
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.2rem;
    color: #fff !important;
    background-color: #343a4078;
    border-color: #343a40;
    display: inline-block;
    font-weight: 400;
}
</style>

