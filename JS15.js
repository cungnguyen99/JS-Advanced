//SUPER
class hero{
    constructor(name, hp, damage){
        this.name=name;
        this.hp=hp;
        this.damage=damage
    }

    applyDamage(damage){
        this.hp-=damage
    }

    attack(enemy){
        //nhan vao mot obj hero roi chay method apply voi tham so dau vao la so damage cua hero co con tro this(dong 22)
        enemy.applyDamage(this.damage)
    }
}

const heroA=new hero('A',100, 10)
const heroB=new hero('B',200, 5)

console.log({heroA, heroB})
//this trong truong hop nay la heroA
heroA.attack(heroB)

console.log({heroA, heroB})

//tao mot class extend tu hero
class RangerHero extends hero{
    constructor(name, hp , damage, range){
        super(name, hp, damage)
        this.range=range
    }

    //ghi de lai phuong thuc attack
    attack(enemy){

        //muon no thuc hien nhung gi o class cha da lam
        super.attack(enemy)

        //no tan cong bao nhieu se nhan lai so mau tu damage cua doi phuong
        this.hp+=enemy.damage
    }
}

const rangeA=new RangerHero('A',100, 10, 3)
const heroC=new hero('C',200, 5)

console.log({rangeA, heroC})

rangeA.attack(heroC)

console.log({rangeA, heroC})