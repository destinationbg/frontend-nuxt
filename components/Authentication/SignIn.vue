<template>
    <main class="page-homepage">
        <section class="top-section">
            <div class="container">
                <h1 v-if="status === 'authenticated'" class="text-lg">Authenticated as {{ data?.user?.name }}!</h1>
                <h1 v-else>Not logged in</h1>
                <button v-if="status === 'authenticated'" @click="signOut({ callbackUrl: localePath('/') })">
                    <span>Logout</span>
                </button>
                <button v-else @click="signIn()">
                    <span>Login</span>
                </button>
                <pre v-if="status"><span>Status:</span> {{ status }}</pre>
                <pre v-if="data"><span>Data:</span> {{ data }}</pre>
                <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
                <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    const localePath = useLocalePath()
    const { data, status, signIn, signOut, getCsrfToken, getProviders } = useAuth()

    const providers = await getProviders()
    const csrfToken = await getCsrfToken()
</script>
