{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...๐งผ');
        }

        grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;

        }

        preheat() {
            console.log('heating up....๐ฅ');
        }

        extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...โ๏ธ`);
            return {
                shots,
                hasMilk: false,
            } 
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {

        // ์์ํด๋์ค ์์(์์ํ๋ฉด์) ์์ฑ์๋ฅผ ๋ณ๋๋ก ์ ์ํ๋ค๋ฉด ๊ผญ super๋ฅผ ํธ์ถ.
        // ๋๋ถ๋ถ์ ๊ฐ์ฒด์งํฅ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์์ ๊ณตํต
        constructor(beans: number, public readonly seriaNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk...๐ฅ');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                shots,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'ssss');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.seriaNumber);
}