function compareTriples(alice,bob) {
    let contA=0
    let contB =0
    alice[0] > bob[0] ? contB += 0 : contA+=1;
    alice[1] < bob[1] ? contA += 0 : contB+=1;
    alice[2] == bob[2] ? contA += 0 : contB+=0;

    console.log(contA,contB);
    let rta = [contA,contB]
    return  rta

}
let alice = [1,2,3]
let bob = [3,2,1]

compareTriples(alice,bob)