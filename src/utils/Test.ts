const cat = {
    name:'tom',
    age:16
}

// 使用泛型和keyof进行类型约束
function handler <T extends Object,K extends keyof T>(obj:T,prop:K){
    // do smt
    console.log('obj :>> ', obj);
    console.log('prop :>> ', prop);
}


handler(cat,'age')
