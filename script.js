
class Fox
{
    constructor(food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if (this.food >= 100) {
            this.food >= 100;
        }
        document.querySelector('food').textContent = fox.food;
    }
  checkState() {
    if (fox.food > 50){
        document.querySelector('.pet_img').src = 'good.jpg';
    } else {
        document.querySelector('.pet_img').src = 'bad.jpg';
    }

  }
}

const fox = new Fox(100);

let intervalId = setInterval(() => {
    fox.food -= Math.floor(Math.random() * 20);
   if (fox.food <= 0) {
    fox.food = 0;
    clearInterval()
   }
   console.log(fox.food);
}, 3000);

