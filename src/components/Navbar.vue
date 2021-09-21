<template>
    <nav>
        <!-- in toolbar -->
        <v-toolbar flat app elevation="1">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <!-- in button create an event -->
            <v-btn elevation="0" class="white--text" color="#0F84DE">
                <span> Create an Event</span>
            </v-btn>
            <!-- out button create event -->
            <v-btn class="ml-2" elevation="0" fab small><v-img src="@/assets/logo-account.svg"/></v-btn>
        </v-toolbar>
        <!-- out toolbar -->

        <!-- in navigation drawer -->
        <v-navigation-drawer v-model="drawer" color="#5D5F61" temporary app>
            <!-- in logo -->
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                            <v-img width="165.94px" height="32px" src="@/assets/logo-lokacara.svg" alt="Lokacara"/>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- out logo -->

            <v-divider></v-divider>

            <!-- in list -->
            <v-list dense nav>
                <v-list-item 
                    v-for="item in items"
                    :key="item.title"
                    link
                    router :to="item.route"
                >
                    <v-list-item-icon>
                        <v-icon class="white--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <!-- out list -->
        </v-navigation-drawer>
        <!-- out navigation drawer -->
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {icon: 'mdi-view-dashboard', title: 'Dashboard', route: '/'},
                {icon: 'mdi-format-list-bulleted', title: 'Event List', route: '/event-list'},
            ],
            right: null,
        }
    }
}
</script>
