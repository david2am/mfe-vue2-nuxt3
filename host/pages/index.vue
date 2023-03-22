<script setup>
import { defineAsyncComponent } from "vue";
const Header = defineAsyncComponent(() => import("remote/Header"));
</script>

<template>
    <div>
        <Header />
        <h2>Page Section</h2>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/posts/1">Go to post number 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/restricted">Go restricted route</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>