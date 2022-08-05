<template>
<header>
        <nav>
            <h1> 
                <router-link to="/"> E-commerse </router-link>
            </h1>
            <ul>
                <li> 
                    <router-link to="/"> Login </router-link>
                 </li>                
                 <li> 
                    <router-link to="/sign-up"> Sign-up </router-link>
                 </li>
                <li> 
                    <router-link to="/"> Log-out </router-link>
                 </li>
            </ul>
        </nav>
</header>
</template>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        
    }
</style>