//interfaces, what each character will need to do
interface Attacker {
    attack():void
}
interface Defender {
    defend():void
}
interface GoldCollector{
    collectGold():void
}
//implements the above interfaces & provides the gold collector commonality
abstract class Character implements Attacker, Defender, GoldCollector{
    protected gold: number = 0
    protected fightingStyle:string

    collectGold(): void {
        this.gold += 20
        console.log('I collected 20 gold pieces')
    }
    abstract attack(): void
    abstract defend(): void

    changeFightingStyle(fightingStyle:string):void{
        this.fightingStyle = fightingStyle
        console.log('Changes fighting stile to ${fightingSyle}')
    }
}
//below are defining each of the characters classes
class Ogre extends Character{
    constructor(){
    super()
    this.fightingStyle = 'club'
    }
    attack(): void {
        console.log('Ogre will be attacking wiht a ${this.fightingStyle}, grr!')
    }
    defend(): void {
        console.log('Ogre will be defending with his shield, grr!')
    }
}
class Peon extends Character{
    constructor(){
        super()
        this.fightingStyle = 'club'
    }
    attack(): void {
        console.log('Peon will be attacking with a ${this.fightingStyle}')
    }
    defend(): void {
        console.log('Peon will defend with his shield')
    }
}
class Knight extends Character{
    constructor(){
    super()
    this.fightingStyle = 'sword'
    }
    attack(): void {
        console.log('Knight will be attacking with a ${this.fightingStyle}!')
    }
    defend(): void {
        console.log('Knight will be defending with his armor!')
    }
}
class Archer extends Character{
    constructor(){
    super()
    this.fightingStyle = 'bow and arrow'
    }
    attack(): void {
        console.log('Archer will be attacking with his ${this.fightingStyle}!')
    }
    defend(): void {
        console.log('Archer will be defending with his tunic')
    }
}
//if needed any character should be able to change fighting style since each character has the property to change the fighting style
const ogre = new Ogre()
const peon = new Peon()
const knight = new Knight()
const archer = new Archer()

ogre.attack()
ogre.defend()
ogre.collectGold()
ogre.changeFightingStyle('spear')
ogre.attack()//this will now change the ogres fighting style

peon.attack()
peon.defend()
peon.collectGold()
peon.changeFightingStyle('bow and arrow')
peon.attack()

knight.attack()
knight.defend()
knight.collectGold()
knight.changeFightingStyle('axe')
knight.attack()

archer.attack()
archer.defend()
archer.collectGold()
archer.changeFightingStyle('club')
archer.attack()