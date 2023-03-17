function* geradora1(){
    //Codigo qualquer ...
    yield "valor 1"
    //Codigo qualquer ...
    yield "valor 2"
    //Codigo qualquer ...
    yield "valor 3"
}

function* geradora2(){
    let i = 0

    while(true){
        yield i;
        i++;
    }
}

function* geradora5(){
    yield function(){
        console.log("vim do yeld1")
    }

    yield function(){
        console.log("vim do yeld2")
    }

    yield function(){
        console.log("vim do y3")
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()