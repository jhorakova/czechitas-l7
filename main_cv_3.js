/*Cviceni 3
Naklonujte si repozitář se stránkou, která nabízí předplatné za nějaké služby. 
Může jít například o internetovou televizi, pravidelné dovážky jídla nebo třeba webový hosting.

Přidejte to stránky soubor s JavaScriptem, tentokrát bez atributu type=module, abyste mohli své funkce volat z konzole.
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. 
Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected. 
Vyzkoušejte vaši funkci v konzoli s různými čísly. Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, 
že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat 
třídu plan--selected.*/

const plan1 = document.querySelector('#plan1')
const plan2 = document.querySelector('#plan2')
const plan3 = document.querySelector('#plan3')

const selectPlan = (planNumer) => {
    if (planNumer === plan1) {
        planNumer.classList.add('plan--selected')
        plan2.classList.remove('plan--selected')
        plan3.classList.remove('plan--selected')
    }
    if (planNumer === plan2) {
        planNumer.classList.add('plan--selected')
        plan1.classList.remove('plan--selected')
        plan3.classList.remove('plan--selected')
    }
    if (planNumer === plan3) {
        planNumer.classList.add('plan--selected')
        plan1.classList.remove('plan--selected')
        plan2.classList.remove('plan--selected')
    }

}




//postupné provolání přes konzoli
//console.log(selectPlan(plan1))
//console.log(selectPlan(plan2))
//console.log(selectPlan(plan3))


