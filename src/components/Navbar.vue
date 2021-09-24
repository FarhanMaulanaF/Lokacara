<template>
    <nav>
        <!-- in toolbar -->
        <v-toolbar class="top-bar" flat app elevation="1" >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <!-- in button create an event -->
            <router-link :to="{name: 'Create-Event'}">
            <b-button style="color: #fff;" class="btn-event mx-5 px-4 py-2" variant="primary">Create an Event</b-button>
            </router-link>
            <!-- out button create event -->
            <v-btn class="profile" elevation="0" fab small><v-img src="../assets/logo-account.svg"/></v-btn>
        </v-toolbar>
        <!-- out toolbar -->

        <!-- in navigation drawer -->
        <v-navigation-drawer v-model="drawer" color="#5D5F61" temporary app>
            <!-- in logo -->
            <v-list-item style="padding: 0;">
                <v-list-item-content style="padding: 0;">
                    <v-list-item-title style="background-color: #3F3F3F;" class="logo-sidebar">
                            <v-img width="165.94px" height="32px" src="../assets/logo-lokacara.svg" alt="Lokacara"/>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <!-- out logo -->

            <v-divider style="margin:0 0 10% 0; "></v-divider>

            <!-- in list -->
            <v-list dense nav>
                <v-list-item 
                    v-for="item in items"
                    :key="item.title"
                    link
                    router :to="item.route"
                    style="margin-top: 2%;"
                    
                >
                    <v-list-item-icon>
                        <v-icon style="color:#fff;" class="white--text">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="menu-sidebar">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <!-- out list -->
            <hr class="line-bot-items">
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
                {icon: 'mdi-view-dashboard', title: 'Dashboard', route: '/dashboard'},
                {icon: 'mdi-format-list-bulleted', title: 'Event List', route: '/event-list'},
            ],
            right: null,
        }
    }
}
</script>

<style scoped>
nav{
    border-bottom: 2px solid #acacaa;
    box-shadow: 0px 0px 3px   #acacaa;
}

nav .btn-event{
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .5px;
}

nav .profile{
    width:2%;
    margin-right: 2%;
}

nav .createEvent{
    font-size: 11.5px;
    font-weight: 700;
}

.logo-sidebar{
    padding: 7% 5%;
    margin: 0;
    
}

.menu-sidebar{
    color: #fff;
    margin-left: 8%;
}

.line-bot-items{
    border: 2px solid #dddddc;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
}

</style>
