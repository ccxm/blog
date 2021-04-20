<template>
    <div id="layout">
      <nav-header id="header" v-if="showNav"/>
        <div id="layout-body">
          <main id="main" class="app-container" :class="{'edit-container': !showNav}">
            <router-view />
          </main>
          <nav-footer id="footer" v-if="showNav"/>
        </div>
    </div>
</template>

<script>
    import storage from '@utils/storage'
    import NavHeader from '@/components/layout/NavHeader';
    import NavFooter from '@/components/layout/NavFooter';

    export default {
        name: 'App',
        components: { NavFooter, NavHeader },
        data() {
          return {
            showNav: true
          }
        },
        watch: {
          '$route': {
            handler() {
              if (this.$route.name === 'edit') {
                this.showNav = false
                console.log(this.showNav)
              }
            },
            immediate: true
          }
        },
        mounted() {
            this.$api.updateVisitorNum({userId: storage.get('userId')})
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        min-height: 100vh;
        background: $default-background;
        position: relative;
    }

    .app-container {
        background: $default-background;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }

    .edit-container {
      margin-top: 0;
    }

    #layout {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background: $default-background;
    }

    #header {
      flex-shrink: 0;
      box-shadow: 0 10px 10px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.1);
      z-index: 999;
    }

    #layout-body {
      flex-grow: 2;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    #footer {
      flex-shrink: 0;
    }

    #main {
      flex-grow: 2;
    }
</style>
