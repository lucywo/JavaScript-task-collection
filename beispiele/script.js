////data-types
/// Boolean: 
//. nur true oder false
//. wenn man etwas vergleichen wwill
//beispiel: ist 4 größer als 2? = console.log(4 > 2);
( o = false            |     (1 = true 
aus = false)                  an = true) 

/// String:
//. Zeichenkette , beispiel: ( " " , ` ` , ' ' )
beispiel:  console.log("Hello World");
           console.log("1 +1");

//doppel quots in doppel quots
//damit es funktioniert : 
console.log("hello  / "world" / " );

/// Numbers:
//. 2 Katigotrien 
beispiel: - intergers (1,2,3,4)
          - Fließkomma-zahlen (3.3247953455, 1.5)
          .getrennt mit einem -> . 
          .Englische Schreibweise nehmen 
beispiel: console.log(1.3 .toFixed());


// addition
console.log(1 + 1); 

//subtracction
console.log(1 - 1); 

//Multiplication
console.log(3 * 3); 

//division
console.log(20 / 5);

///comparison operators "Boolean"
//equal : 1 == 1 (number + strinks)
console.log(1 == 1); 
//result: true

//not Equal : 1 != 1 (gegenteil was ich erwarte)
console.log(1 != 1);
//result: false



//greate than : 1 > 1 (mit numbers)
console.log(1 > 1);
//result: false

//greater than orequal : 1 >= 1 (größer oder gleich)
console.log(1 >= 1);
//result: true

//less than : 1 < 1 (kleiner als)
console.log(1 < 1);
//result: false

//less than or equal : 1 >= 1 (kleiner gleich als)
console.log(1 <= 1);
//result: true

/// Egual and not Egual problem (haben einen großen Bruder oder Schwester)
console.log("1" == 1);
//result: true

console.log("1" != 2);
//result: true
 
////wichtig!!!! : nur ausschließlich ein strick equal operator verwenden ! 'also ein = mehr '
console.log("1" === 1);
//result: false

console.log("1" !== 2);
//result: true

//// logical-operators: 
/// AND = && (kann mann zwei oder mehrere conditions an einer koppeln und müssen zsm true ergeben)
console.log(2 > 1 && 5 < 6);
//result: true

/// OR = || (eine bedingung oder die andere muss true ergeben)
console.log(2 > 1 || 7 < 6);
//result: true
console.log(0> 1 || 7 < 6);
//result: false

/// NOT = ! (dreht das ergebniss um,wenn etwas true ergibt, wird es false)
console.log(!(5 > 10));
//result: true

/// Grouping-Operator: for Arithmetic (Grouping-operator immer als erstes ausgeführt in einer Zeichenfolge !!! )
console.log(7 + 20 / 5);  wird zu  console.log((7+10) / 5);
//result: 11                       //result: 5.4

/// Grouping-Operator: for Comparison 
console.log((5 + 5) === 10);
//result: true
console.log((2 * 6) < 13);
//result: true
console.log((6 / 2) === (1 + 5 * 3 - 13));
//result: true 

/// Concatenation & Addition Operator: ( + )
// Concatenationoperator
console.log("My" + "name is Lucy");
//result: "My name is Lucy"
console.log("My" + "name" + "is Lucy");
//result: "My name is Lucy"

beispiel:
console.log("1" + 1); 
//result: 11           
console.log("" + 6 + 8); 
//result: 68
/// !wird gemacht, um aus Ganzzahlen ein strink zu formen!

//man kann mehrere Operatoren verbinden !
console.log("foo" + "bar" === "foobar");
//result: true

///Fubktion Anatomy:
beispiel:
funktion myFirstFanktion () {
// the code 
}












