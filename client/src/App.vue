<template>
  <v-app style="background: #e3e3ee">
		<!-- Side navbar -->
		<v-navigation-drawer app temporary fixed v-model="sideNav">
			<v-toolbar color="accent" dark flat>
				<v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
				<router-link to="/" tag="span" style="cursor: pointer">
					<h1 class="title pl-3">VueShare</h1>
				</router-link>
			</v-toolbar>

			<v-divider></v-divider>

			<!-- Side navbar links -->
			<v-list>
				<v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
					<v-list-tile-action>
						<v-icon>{{item.icon}}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						{{item.title}}
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>

    <!-- Horizontal Nav -->
    <v-toolbar fixed color="primary" dark>
      <!-- App title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Search Input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

			<v-spacer></v-spacer>

			<!-- Horizontal navbar links -->
			<v-toolbar-items class="hidden-xs-only">
				<v-btn flat v-for="item in horizontalNavItems" :key="item.titel" :to="item.link">
					<v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
					{{item.title}}
				</v-btn>
			</v-toolbar-items>

    </v-toolbar>

    <!-- App content -->
    <main>
			<v-container class="mt-4">
				<transition name="fade">
      		<router-view/>
				</transition>
			</v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
