function dominoCard(angka) {
    let s = '';
    for (let i = 1; i <= angka; i++) {
        if (i == 1 || i == angka) {
            for (let j = 1; j <= angka; j++) {
                s += "*";
                
            }
        }else {
            for (let k = 1; k <= angka; k++) {
                if (k == 1 || k == angka) {
                    s += "*"
                }else{
                    s += " ";
                }
                
            }
        }
        s += '\n'
        
    }
    console.log(s);
}

dominoCard(10)


let a = 10
for (let i = 1; i <= a; i++) {
    let temp = ''
    for (let j = 1; j <= a; j++) {
        if (j ==  1 || j == a) {
            for (let k = 0; k < a; k++) {
                temp += "*"    
            }
        }else{

            temp += " "
        }
        temp += '\n'
    }
     
     console.log(temp);
}