/*
Místo pro váš program
*/
/*Cviceni 1
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, 
a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.*/

const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

//console.log(salary(5,5,5))

const taxed = (salary,percentTax) => {
return Math.round(salary*(100-percentTax)/100)
}

//console.log(taxed(salary(5,5,5), 15))

const wage = 1000
const hours = 7
const days = 20

const salaryBeforeTax = salary(wage, hours, days)
const salaryAfterTax = taxed(salaryBeforeTax,15)

console.log(salaryBeforeTax)
console.log(salaryAfterTax)

document.querySelector('.msg').innerHTML = `
<p>Hodinnová sazba: ${wage} kč</p>
<p>Počet odpracovaných hodin: ${hours} hod/den</p>
<p>Počet odpracovaných dnů: ${days} dni/měsíc</p>
<p>Hrubá mzda: ${salaryBeforeTax} kč</p>
<p>Čistá mzda: ${salaryAfterTax} kč</p>
`

/*Cviceni 2
Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. 
Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, 
musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, 
ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, 
zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. 
Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

> calculate(2, '+', 3)
5
> calculate(3, '*', 7)
21
> calculate(10, '/', 4)
2.5*/

const calculate = (number1, operation, number2) => {
    if (operation === '+' ) {
        return number1 + number2
    } 
    if (operation === '-') {
        return number1 - number2
    }
    if (operation === '*') {
        return number1 * number2
    }
    if (operation === '/') {
        return number1 / number2
    }
}
console.log(calculate(1, '+', 2))
console.log(calculate(3, '-', 1))
console.log(calculate(3, '*', 3))
console.log(calculate(8, '/', 2))


