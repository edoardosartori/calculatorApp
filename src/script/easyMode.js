export default {
  name: 'EasyMode',
  data() {
		return {
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
			this.buffer = '';
			this.calcs = '';
			this.calculated = false;
			this.firstOperand = '';
			this.secondOperand = '';
			this.operator = '';
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
			if(this.operator == '') {
				this.operator = symbol;
				if(this.firstOperand == '') {
					this.calcs += this.buffer;
					this.addToCalcs(symbol);
				}
				else this.addToCalcs(symbol);
				this.firstOperand = this.buffer;
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
			this.buffer = '';
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
			if(this.firstOperand != '' && this.operator != '' && this.secondOperand != '') {
				this.addToCalcs(this.buffer);
        let expression = this.firstOperand + this.operator + this.secondOperand;
				this.buffer = eval(expression.replace('−', '-')).toString().replace('-', '−');
				// console.log("Calculated: " + expression + " = " + this.buffer);
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
