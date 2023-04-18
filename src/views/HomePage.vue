<template>
  <ion-page>
    <ion-content :fulldisplay="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Calculator</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="container">
        <div class="display">-</div>
        <div class="display main-display">0</div>
        <div>
          <div class="buttons-row">
            <button class="button delete-btn">C</button>
            <button class="button delete-btn">&larr;</button>
            <button class="button operator-btn">%</button>
            <button class="button operator-btn">&divide;</button>
          </div>
          
          <div class="buttons-row">
            <button class="button">7</button>
            <button class="button">8</button>
            <button class="button">9</button>
            <button class="button operator-btn">&times;</button>
          </div>
          
          <div class="buttons-row">
            <button class="button">4</button>
            <button class="button">5</button>
            <button class="button">6</button>
            <button class="button operator-btn">&minus;</button>
          </div>
          
          <div class="buttons-row">
            <button class="button">1</button>
            <button class="button">2</button>
            <button class="button">3</button>
            <button class="button operator-btn">&plus;</button>
          </div>
          
          <div class="buttons-row">
            <button class="button double">0</button>
            <button class="button">.</button>
            <button class="button operator-btn">&equals;</button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="../script/homepage.js"/>

<style src="../style/homepage.css"/>

