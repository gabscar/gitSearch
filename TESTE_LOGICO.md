

## Questão 1:

*Implemente um método que crie um novo array baseado nos valores passados.<br>
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

    var q1 =newArray(3,'a')

    function newArray(length,item){

        if(typeof length == 'number'){
           var arr = new Array(length)
           for(let i=0; i<length; i++)
             arr[i] = item
             console.log(arr)   

             return arr;
        }else{
            console.log('entrada inválida')
        }


    }

## Questão 2:

* Implemente um método que inverta um array, não utilize métodos nativos do array.<br>
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

    var q2 = reverseArray([1,2,3])
    
    function reverseArray(arr){
    
        if(typeof arr == 'object'){
        
            let length = arr.length;
            console.log(arr)
            var arr_aux = new Array(length)
            length--
            
            for(let i in arr){
            
                arr_aux[i] = arr[length]
                length--;
                
            }
            console.log(arr_aux)
            return arr_aux;
        }else{
        
            console.log('entrada inválida')
        }

    }
    

## Questão 3:


* Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).<br>
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]



    var q3 = clearArr([1,2,'', undefined])

    function clearArr(arr){
    
        if(typeof arr == 'object'){
        
            let length = arr.length;
            var arr_aux = new Array(length)

            arr_aux = arr.filter(item => item>0)
            console.log(arr_aux)
            return arr_aux

        }else{
        
            console.log('entrada inválida')
        }
    }

## Questão 4:
* Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.<br>
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

    var q4 = convertObject([["c",2],["d",4]])
    
    function convertObject(arr){
    
        if(typeof arr == 'object'){

            const obj = Object.fromEntries(arr);

            console.log(obj)
            
        }else{
        
            console.log('entrada inválida')
        }
    }



## Questão 5:
* Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

    var q5 =removeItem([5,4,3,2,5], 5,3)

    function removeItem(arr, ...number){

        if(typeof arr == 'object'){
        
            let length = arr.length;        
            var arr_aux = new Array(length)
            arr_aux = arr.filter(function(item){
            
                return number.indexOf(item) === -1
                
            })

            console.log(arr_aux)
            return arr_aux
        }else{
        
            console.log('entrada inválida')
            
        }
    }



## Questão 6:
* Implemente um método que retorne um array, sem valores duplicados.<br>
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
var q6 = notDuplicated([1,2,3,3,2,4,5,4,7,3])

    function notDuplicated(arr){
    
        if(typeof arr == 'object'){
        
            let length = arr.length;        
            var arr_aux = new Array(length)
            
            for(let i of arr)
            
                if(arr_aux.indexOf(i) === -1)
                    arr_aux.push(i)

            arr = arr_aux.filter(item => item>0)
            console.log(arr)
            return arr
            
        }else{
        
            console.log('entrada inválida')
            
        }
    }



## Questão 7:
* Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.<br>
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

    var q7 = intersectionArr([1,2,3,4],[1,2,3,4])

    console.log(q7)
    
    function intersectionArr(arr1,arr2){
    
        if(typeof arr1 == 'object' && typeof arr2 == 'object' ){

            if(arr1.length != arr2.length){
            
                return false
            }else{
            
                for(let i in arr1){
                
                    if(arr1[i]!==arr2[i])
                    
                        return false
                }
                
                return true
            }

        }else{
        
            console.log('entrada inválida')
        }
    }



## Questão 8:
* Implemente um método que remova os aninhamentos de um array de arrays para um array unico.<br>
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] 


    var q8 = removeNesting ([1, 2, [3,7], [4, 5]])

    function removeNesting(arr){
    
        if(typeof arr == 'object'){

            var arr_aux = arr.flat()

            console.log(arr_aux)
            
            return arr_aux
            
        }else{
            console.log('entrada inválida')
        }
    }



## Questão 9:

* Implemente um método divida um array por uma quantidade passada por parâmetro.<br>
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

    var q9=shareFor([1, 2, 3, 4, 5], 2)
    console.log(q9)

    function shareFor(arr,number){

        if(typeof arr == 'object'){
            var arr_aux = []

            for (let i = 0; i < arr.length; ) {

                arr_aux.push(arr.slice(i,i+number))
                i+=number
            }

           return arr_aux
           
        }else{
        
            console.log('entrada inválida')
            
        }
    }

## Questão 10:
* Implemente um método que encontre os valores comuns entre dois arrays.<br>
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]


    var q10 = intersection ([6, 8], [8, 9])


    function intersection(arr1,arr2){
    
        if(typeof arr1 == 'object' && typeof arr2 == 'object' ){

         var arr_aux = arr1.filter(function(item){
         
                return arr2.indexOf(item) === 0
        })

        console.log(arr_aux)
        
        }else{
        
            console.log('entrada inválida')
            
        }
    }
