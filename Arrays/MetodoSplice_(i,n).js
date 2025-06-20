// Metodos splice (i, n) 📝🦾

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]              // da array letras, na posição 2 ("C") remove 1 (o proprio c)
// indices (i)   0    1    2    3    4    5    6    7                
console.log(letras)

letras.splice(2, 1)
//        letras = ["A", "B", "D", "E", "F", "G", "H"]
// indice (i)        0    1    2    3    4    5    6 
console.log(letras)
letras.splice(3,2) // letras = ["A", "B", "D", "G", "H"]             // da array letras, na posição 3 ("D") remove 2 (E e F)
console.log(letras)
