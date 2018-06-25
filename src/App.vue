<template>
  <div id="app">
    <header class="hero is-light">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="./assets/logo.png">
              <!-- <p>
                <code>Amsterdam Center for Entrepreneurship</code><br>
                <strong>ACE</strong><br>
                <span class="darkgrey">VENTURE LAB</span>
              </p> -->
            </a>
            <div class="navbar-burger burger" @click="showNav = !showNav" :class="{'is-active': showNav}">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenubd" class="navbar-menu align-items-center" :class="{'is-active': showNav}">
            <div class="navbar-start">
              <div class="navbar-item">
                <div class="control has-icons-right">
                  <input class="input search-input" type="text" placeholder="Search...">
                  <span class="icon is-small is-right">
                    <i class="fa fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="navbar-end align-items-center">
              <a class="navbar-item nav-tag">
                <span class="icon is-medium">
                  <i class="fa fa-bell-o"></i>
                </span>
              </a>
              <a class="navbar-item">
                <span class="icon is-medium">
                  <i class="fa fa-envelope-o"></i>
                </span>
              </a>
              <a class="navbar-item">
                <span>
                  <figure class="image is-64x64">
                    <img class="img-circle" src="./assets/user.png">
                  </figure>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="wrapper">
      <div class="columns">
        <aside class="column is-3 aside">
          <nav class="menu">
            <div class="custom-menu-label">
              Lori Greiner @ Merkspace
            </div>
            <section>
              <profile-strength></profile-strength>
            </section>
            <section>
              <ul class="menu-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Members</a></li>
                <li><a href="#">Groups</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Q&A</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">My Merkspace</a></li>
              </ul>
            </section>
            <section>
              <a class="button is-rounded">Manage your profile</a>
            </section>

          </nav>
        </aside>
        <main class="column is-9 main">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileStrength from './components/ProfileStrength'
export default {
  name: 'App',
  data: function() {
    return {
      isActive: false,
      showNav: false
    }
  },
  components: {
    ProfileStrength
  }
  // methods: {
  //   toggleNav: function() {
  //     this.isActive = !this.isActive;
  //   }
  // }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import '../node_modules/bulma-calendar/calendar.sass'
@import 'mq'
/* header */
.navbar-brand code
  font-size: 9px
.navbar-brand p
  line-height: 1
.search-input
  border-radius: 25px
  font-size: inherit
  font-weight: bold
  padding-left: 1.4rem
.darkgrey
  color: darkgrey
  font-size: 15px
.align-items-center
  align-items: center

.img-circle
  border-radius: 50%
  border: 1.5px solid #8a8a8a
.navbar
  padding: 0 1em
.navbar-item img
  max-height: 5rem
.navbar-menu
  padding-left: 70px
.navbar-menu.is-active
  padding: 0 20px
.navbar-burger
  height: inherit
/* side bar */
.aside
  padding: 2em .2em 0 3.5em

.menu-list
  font-weight: 500
  font-size: 20px
.menu-list a
  padding-left: 0
nav.menu section
  padding-left: 40px
  padding-bottom: 40px
.main
  padding: 2em 2em
.custom-menu-label
  font-size: 1.6rem
  color: #2f2f2f
  margin-bottom: 1em
  letter-spacing: .9px
.control.has-icons-right
  font-size: 1.2rem
.control.has-icons-right .icon
  color: #6bbde5
.button
  border-width: 2px
  border-color: #bdbdbd
.navbar-end .fa
  font-size: 2.5em
  color: #6d6d6d
</style>
