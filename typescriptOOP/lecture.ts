//Classes-constructors like init
//added nickname for optional argument
class Car{
    //define the types of the properties
    readonly id: number
    make: string
    model: string
    year: number
    nickname?: string
    
    constructor(id: number, make: string, model: string, year: number){
        //assign the properties
        this.id = id
        this.make=make
        this.model=model
        this.year=year
    }
    
    drive(miles:number):void{
        console.log("You drove ", miles, "miles")
    }
}
const car = new Car (1,'honda', 'fit', 2007)   

car.drive(100)
//output: You drove  15 miles

car.make = 'toyota'
console.log(car.make)
//reassigns make

car.nickname = 'betty white'
console.log(car.nickname)

//access control keywords
// public -- this property is available anywhere. If no access modifier is used, the property defaults to public

// protected -- this property can be used within the class and within the derived classes, but not from outside the class

// private -- this property can only be used from within the class that declared it.

class Car2{
    //define the types of the properties
    private readonly id:number
    public make: string
    public model: string
    public year: number
    public nickname?: string
    
    constructor(id:number, make: string, model: string, year: number, nickname=undefined){
        //assign the properties
        this.id=id
        this.make=make
        this.model=model
        this.year=year
    }
    drive(miles:number):void{
        console.log("You drove ", miles, "miles")
}
    printInfo():void{
        console.log(`The car id is ${this.id}
                    Make/Mode is ${this.make} ${this.model}
                    Year is ${this.year}`)
    }
}
const car2 = new Car2 (1, 'honda','fit',2007)

//declaring properties in Constructor-combine steps declare types and access control keys into constructor

class Car3{
    //define the types of the properties
    
    public nickname?: string
    
    constructor(private readonly id:number, 
        public make: string, 
        public model: string, 
        public year: number){}
    drive(miles:number):void{
        console.log("You drove ", miles, "miles")
}
    printInfo():void{
        console.log(`The car id is ${this.id}
                    Make/Mode is ${this.make} ${this.model}
                    Year is ${this.year}`)
    }
}
const car4 = new Car3 (1, 'honda','fit',2007)

//Getters
class CarX{
    public nickname?: string
    
    constructor(private readonly _id:number, 
        public _make: string, 
        public _model: string, 
        public _year: number){}

        get make():string{
            return this._make
        }
        get model():string{
            return this._model
        }
        get year():number{
            if(this._model === 'fit' && this._year === 2010){
                console.log('emergency recall')
                }
                return this._year
            }
    drive(miles:number):void{
        console.log("You drove ", miles, "miles")
            }
    printInfo():void{
        console.log(`The car id is ${this._id}
                    Make/Mode is ${this._make} ${this._model}
                    Year is ${this._year}`)
    }
}
const carA = new CarX (1, 'honda','fit',2007)
console.log(carA.make)
console.log(carA.model)
//Public getters can make private variables viewable outside the class
car.nickname = 'kit'
//Setters-look at Jupyter
//getting just retrieves, setting updates

//Index signatures
//allows us to change the properties of the class
//syntax for TS
class Pokedex{
    [pokemon:string]:string
}
const pokedex = new Pokedex()
pokedex['pikachu']= 'lightning rodent'
// pokedex['charmander'] = 100
console.log(pokedex)

//better ex of index 
class Person{
    [prop:string]:string|number
    constructor(public name:string){}
}

const person = new Person('dylan')
//cant index new prop like person.age = 32
console.log(person.age = 32)
console.log(person.height = '5 foot 7')

//STATIC-consistent across all our properties, arent accessible from the CLASS ITSELF ONLY
class Person1{
     //this is what you add for static
    [prop:string]:string|number
    public static species:string = 'homosapien'

    constructor(public name:string){}

    get species(){
        return Person1.species
    }
}
//access it
Person1.species
//cant access
// const person1 = new Person1{'sean'}
console.log(person.species) //get undefined

class Counter{
    static count:number = 0

    increaseCount(){
        Counter.count++
    }
}
const counter = new Counter()
counter.increaseCount()

const counter2 = new Counter()
counter2.increaseCount()
Counter.count
//Inheritance
class Duck{
    public static className:string = "Duck" 
    
    constructor(protected age$:number){
    }
    
    get age():number{
        return this.age$
    }
    
    public quack():void{
        console.log("Generic Quack Sound")
    }
    
    public swim():void{
        console.log("paddles with two little feet")
    }
    
}
console.log(Duck.className)
let daffy= new Duck(39)
daffy.quack()
daffy.swim()
daffy.age
//IN THE CHILD CLASS
class MallardDuck extends Duck{
    public static className="MallardDuck"

    constructor(public color:string, age:number){
        super(age)
    }
}

let mallard = new MallardDuck("brown", 2)
console.log(MallardDuck.className)
console.log(Duck.className)
console.log(mallard.age)
mallard.quack()
mallard.swim()
console.log(mallard.color)

//Protected var are accessing

class TV{
    constructor (protected serialID: string){}
}
class Roku extends TV{
    showSerial(): void{
        console.log(this.serialID)
    }
}

const roku = new Roku ('a9845958645')
//Roku.showSerial()

abstract class Car_{
    brake():void{
        console.log('Squuuueeeel')
    }
    drive(){}
    honk(){}
}
//ICE: #1. Create a class Car and then create 2 car subclasses 
//SmartCar, Truck. All Cars should be able to brake drive and honk
//When a SmartCar drives it makes hummmm sound and when it honks it makes a MMmeep sound
//When a Truck drives it makes a vrooom sound and when it honks it makes BWaaaaaahp
//When a Truck or a SmartCar brakes it makes squeeel sound
// abstract class Car{
//     brake():void{}
//     drive():void{}
//     honk():void{}
// }


//
class SmartCar extends Car_{
    drive():void{
        console.log('Hummmmmmmm')
    }
    honk():void{
        console.log('MMmmeeep')
    }
}

class Truck extends Car_{
    drive():void{
        console.log('Vrooooooomm')
    }
    honk():void{
        console.log('BWaaaaahp')
    }
}
// const carArray: Car[] = [new Car(), new SmartCar(), new Truck()]

// for (const car of carArray){
//     car.drive()
//     car.honk()
//     car.brake()
// }
const tesla = new SmartCar()
const tacoma = new Truck()


tesla.drive()
tesla.brake()
tesla.honk()

tacoma.drive()
tacoma.brake()
tacoma.honk()