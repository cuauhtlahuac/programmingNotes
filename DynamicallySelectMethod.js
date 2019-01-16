//DYNAMICALLY SELECT A METHOD OF AN OBJECT IN JAVASCRIPT

const car = {
    drive: ()=>{
        alert('go to drive')
    }
    ,
    park: ()=>{
        alert('better if we stay to sleep')
    }
    ,
}

const driver = {
    sleepy: 4
}
/*
if (driver.sleepy < 6) {
    car.park()
} else {
    car.drive()
}
*/
car[driver.sleepy > 6 ? 'park' : 'drive']();
