//method overriding: ghi de phuong thuc
class animal{
    run(){
        console.log('I am running....')
    }

    climbing(){
        console.log('I am climbing trees')
    }
}

class bear extends animal{
    //overide
    climbing(cb){
        console.log('i am climbing verry quickly...')

        //truyen vao mot callback function
        cb()
    }
}

const panda=new bear()

panda.climbing(function(){
    console.log('Time to bed...')
})