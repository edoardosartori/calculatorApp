<template>
  <div>
    <div class="display">{{ calculationDisplay || '-' }}</div>
    <div class="display main-display">{{ mainDisplay || 0 }}</div>
    <div class="buttons-row">
      <button class="button delete-btn"
        v-on:click="this.reset()">
        C
      </button>
      <button class="button delete-btn"
        v-on:click="this.delete()"
        :disabled="calculated">
        &larr;
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('x^2')">
        x²
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('**')">
        x^
      </button>
    </div>

    <div class="buttons-row">
      <button class="button operator-btn"
        v-on:click="this.action('sin')">
        sin
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('cos')">
        cos
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('tan')">
        tan
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('log')">
        log
      </button>
    </div>

    <div class="buttons-row">
      <button class="button operator-btn"
        v-on:click="this.action('(')">
        (
      </button>
      <button class="button operator-btn"
        v-on:click="this.action(')')">
        )
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('radic')">
        √
      </button>
      <button class="button operator-btn"
        v-on:click="this.action('/')">
        &divide;
      </button>
    </div>

    <div class="buttons-row">
      <button class="button"
        v-on:click="this.action('7')">7</button>
      <button class="button"
        v-on:click="this.action('8')">8</button>
      <button class="button"
        v-on:click="this.action('9')">9</button>
      <button class="button operator-btn"
        v-on:click="this.action('*')">
        &times;
      </button>
    </div>

    <div class="buttons-row">
      <button class="button"
        v-on:click="this.action('4')">4</button>
      <button class="button"
        v-on:click="this.action('5')">5</button>
      <button class="button"
        v-on:click="this.action('6')">6</button>
      <button class="button operator-btn"
        v-on:click="this.action('-')">
        &minus;
      </button>
    </div>

    <div class="buttons-row">
      <button class="button"
        v-on:click="this.action('1')">1</button>
      <button class="button"
        v-on:click="this.action('2')">2</button>
      <button class="button"
        v-on:click="this.action('3')">3</button>
      <button class="button operator-btn"
        v-on:click="this.action('+')">
        &plus;
      </button>
    </div>

    <div class="buttons-row">
      <button class="button double"
        v-on:click="this.action('0')">0</button>
      <button class="button"
        v-on:click="this.action('.')">.</button>
      <button class="button operator-btn"
        v-on:click="this.action('=')">
        &equals;
      </button>
    </div>
  </div>

</template>

<script src="../script/hardMode.js"/>
