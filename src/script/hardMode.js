export default {
  name: 'HardMode',
  data() {
		return {
      expression: '',
			calculationDisplay: '',
			mainDisplay: '',
			calculated: false,
			result: ''
		};
	},
	methods: {
		reset() {
      this.expression = '';
			this.calculationDisplay = '';
			this.mainDisplay = '';
			this.calculated = false;
			this.result = '';
		},

    action(value) {
			console.log('expression: ' + this.expression);
      if(value !== undefined) {
        if(value == 'x^2'){
          this.expression = this.square();
        }
        else if(value == 'radic'){
          this.expression = Math.sqrt(this.expression);
        }
        else if(value == 'log'){
          this.expression = Math.log(this.expression);
        }
        else if(value == 'sin'){
          this.expression = Math.sin(this.expression);
        }
        else if(value == 'cos'){
          this.expression = Math.cos(this.expression);
        }
        else if(value == 'tan'){
          this.expression = Math.tan(this.expression);
        }
  
        else if(value == '=') {
					this.getResult();
					this.printCalculation(value);
        }
				else {
					this.calculated = false;
          this.expression += value;
					this.printCalculation(value);
        }

        if(this.expression == undefined) {
          this.expression = '';
          value = 0;
        } else {
          value = this.expression;
        }
      }
    },

    square() {
			if(this.expression != undefined) {
				this.calculated = true;

				return eval(this.expression * this.expression);
			}
			else {

				return;
			}
    },
		
		delete() {
			this.expression = this.expression.slice(0, -1);
			this.calculationDisplay = this.calculationDisplay.slice(0, -1);
		},

		getResult() {
			this.result = eval(this.expression);
			this.expression = this.result;
			this.mainDisplay = this.result;
			this.calculated = true;
			console.log('Answer is: ' + this.result);
		},
		
		printCalculation(value) {
			if(value == '*') value = '×';
			if(value == '/') value = '÷';
			if(value == '-') value = '−';
			if(value == '=') value = ' = ' + this.result;
			this.calculationDisplay += value;
		}
  }
};
