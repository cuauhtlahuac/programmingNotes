//Listas Ligadas

class Node {
    //hijo: Node
    constructor(data) {
        this.data = data;
        this.hijo = null;
    }
}

function ListaLigada() {
    let root = new Node(0);
    let cNode = root;
    for (let i = 1; i <= 10; i++) {
        let nNode = new Node(i)
        cNode.hijo = nNode;
        cNode = cNode.hijo;
    }
    return root
}

const eliminaDuplicados = (root)=>{
    console.log("%c from eliminaDuplicados", "color:green")
    let hashTable = {}
    let x = root;
    hashTable[root.data] = true;
    while (root.hijo) {
        //Preguntar si ya existe la llave
        if (hashTable[root.hijo.data]) {
            root.hijo = root.hijo.hijo
        }//Si no existe guardarla
        else {
            hashTable[root.hijo.data] = true;
            root = root.hijo;
        }
    }
    return x;
}

// Numero K imprimir el valor de el numero dado
const regresameValorPosicion = (root,num)=>{
    console.log("%c from regresameValorPosicion", "color:orange")
    console.log(root)
    let h = root;
    let c = root;
    let contador = 0;
    // primero determinar la ultima posicion de la lista con un contador
    while (c) {
        contador++;
        c = c.hijo;
    }
    // Guardar en una variable la posicion menos el numero que se me dio
    let posicion = contador - (num - 1);
    console.log({
        posicion,
        contador,
        num
    })
    // Después recorrer la lista hasta la posicion y regresar el valor
    let steps = 1;
    while (steps <= posicion) {
        if (steps === posicion) {
            return root.data;
            break
        }
        root = root.hijo
        steps++
    }
}

let root = ListaLigada()
regresameValorPosicion(root, 2)
eliminaDuplicados(root);
