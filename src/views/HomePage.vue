<template>
  <ion-page>
    <ion-header :translucent="true" collapse="onMobile">
      <ion-toolbar>
        <ion-title>Calculator</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fulldisplay="true">
      <div class="container">
        <p class="mode-selection">
          <button class="mode-selection-btn"
            v-on:click="hardMode = false"
            :disabled="!hardMode">
            easy mode
          </button>
          <button class="mode-selection-btn"
            v-on:click="hardMode = true"
            :disabled="hardMode">
            hard mode
          </button>
        </p>
        
        <Transition name="slide-up" mode="out-in">
          <div v-if="!hardMode">
            <EasyMode />
          </div>
          <div v-else>
            <HardMode />
          </div>
        </Transition>

      </div>
  </ion-content>
</ion-page>
</template>

<script src="../script/homepage.js"/>

<style src="../style/homepage.css"/>

