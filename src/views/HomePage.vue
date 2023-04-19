<template>
  <ion-page>
    <ion-header :translucent="true" collapse="onMobile">
      <ion-toolbar>
        <ion-title> Calculator </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fulldisplay="true">
      <div class="container">
        <div class="display">{{ calcs || '-' }}</div>
        <div class="display main-display">{{ buffer || 0 }}</div>
      
      <div>
        <div class="buttons-row">
          <button class="button delete-btn double"
            v-on:click="this.reset()">
            C
          </button>
          <button class="button delete-btn"
            v-on:click="this.delete()">
            &larr;
          </button>
          <button class="button operator-btn"
            v-on:click="this.handleSymbol('/')">
            &divide;
          </button>
        </div>
        
        <div class="buttons-row">
          <button class="button"
            v-on:click="this.handleNumber('7')">7</button>
          <button class="button"
            v-on:click="this.handleNumber('8')">8</button>
          <button class="button"
            v-on:click="this.handleNumber('9')">9</button>
          <button class="button operator-btn"
            v-on:click="this.handleSymbol('*')">
            &times;
          </button>
        </div>

        <div class="buttons-row">
          <button class="button"
            v-on:click="this.handleNumber('4')">4</button>
          <button class="button"
            v-on:click="this.handleNumber('5')">5</button>
          <button class="button"
            v-on:click="this.handleNumber('6')">6</button>
          <button class="button operator-btn"
            v-on:click="this.handleSymbol('-')">
            &minus;
          </button>
        </div>

        <div class="buttons-row">
          <button class="button"
            v-on:click="this.handleNumber('1')">1</button>
          <button class="button"
            v-on:click="this.handleNumber('2')">2</button>
          <button class="button"
            v-on:click="this.handleNumber('3')">3</button>
          <button class="button operator-btn"
            v-on:click="this.handleSymbol('+')">
            &plus;
          </button>
        </div>

        <div class="buttons-row">
          <button class="button double"
            v-on:click="this.handleNumber('0')">0</button>
          <button class="button"
            v-on:click="this.handleComma()">.</button>
          <button class="button operator-btn"
          v-on:click="this.getResult()">
            &equals;
          </button>
        </div>
      </div>
    </div>
  </ion-content>
</ion-page>
</template>

<script src="../script/homepage.js"/>

<style src="../style/homepage.css"/>

