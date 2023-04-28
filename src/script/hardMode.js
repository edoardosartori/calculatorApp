export default {
  name: 'HardMode',
  data() {
		return {
      expression: '',
			buffer: '',
			calcs: '',
			calculated: false,
			firstOperand: '',
			secondOperand: '',
			operator: ''
		};
	},
	methods: {
		reset() {
      this.expression = '';
			this.buffer = '';
			this.calcs = '';
			this.calculated = false;
			this.firstOperand = '';
			this.secondOperand = '';
			this.operator = '';
		},

    action(value) {
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
          const answer = eval(this.expression);
          this.expression = answer;
          this.buffer = answer;
          
        } else {
          this.expression += value;
        }
  
        if(this.expression == undefined) {
          this.expression = '';
          value = 0;
        } else {
          value = this.expression;
        }
        // expression += value;
  
  
      }
    },

    square() {
      return eval(this.expression * this.expression);
    },
		
		delete() {
			this.buffer = this.buffer.slice(0, -1);
		},
		
		handleNumber(number) {
			if(this.calculated) {
				this.reset();
				this.buffer = number;
			}
			else {
				if(this.buffer=='0') this.buffer = number;
				else this.buffer = this.buffer + number;
			}
		},

		handleSymbol(symbol) {
			this.calculated = false;
			if(symbol === '(' || symbol === ')') {
				this.buffer += symbol;
				return;
			}
			if(this.operator == '') {
				this.operator = symbol;
				if(this.firstOperand == '') {
					this.calcs += this.buffer;
					this.addToCalcs(symbol);
				}
				else this.addToCalcs(symbol);
				this.firstOperand = this.buffer;
				console.log("First operand set to: " + this.buffer);
			}
			else if(this.buffer != '') {
				this.calcs += this.buffer;
				this.addToCalcs(symbol);
				let expression = this.firstOperand + this.operator + this.buffer;
				this.buffer = eval(expression);
				this.firstOperand = this.buffer;
				this.operator = symbol;
				
			}
			else {
				this.operator = symbol;
				this.calcs = this.calcs.slice(0, -1)
				this.addToCalcs(symbol);
			}
			console.log("Operator set to: " + symbol);
			this.buffer = '';
		},

		handleFunction(functionz) {
			console.log(functionz);
		},

		handleComma() {
			if(this.buffer == '') {
				this.buffer = '0.';
			}
			else this.buffer += '.'; 
		},

		getResult() {
			if(this.buffer == '')
				return;
			this.secondOperand = this.buffer;
			console.log("Second operand set to: " + this.buffer);
			if(this.firstOperand != '' && this.operator != '' && this.secondOperand != '') {
				this.addToCalcs(this.buffer);
        let expression = this.firstOperand + this.operator + this.secondOperand;
				this.buffer = eval(expression.replace('−', '-')).toString().replace('-', '−');
				console.log("Calculated: " + expression + " = " + this.buffer);
				this.calcs += ' = ' + this.buffer;
				this.operator = '';
				this.calculated = true;
			}	
		},
		
		addToCalcs(value) {
			if(value == '*') value = '×';
			if(value == '/') value = '÷';
			if(value == '-') value = '−';
			this.calcs += value;
		}
  }
};
