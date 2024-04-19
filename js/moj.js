const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttonTwo");
const buttonThree = document.querySelector(".buttonThree");
const clickme = document.querySelector(".clickme");
const clickmetwo = document.querySelector(".clickmetwo");
const clickmethree = document.querySelector(".clickmethree");

buttonOne.addEventListener("click", function () {
	clickme.textContent = "Kliknięto";
});



// FUNKCJA BIND - na siłę podpina component pod funkcję 

const buttonCompo = {
    name_btn: 'przycisk drugi',
    showBtn: function(term) {
        clickmetwo.textContent = `Kliknięto w kolejny przycisk. Nazwa: ${this.name_btn}, ${term}`
    }

}

buttonTwo.addEventListener('click', buttonCompo.showBtn.bind(buttonCompo, 'nazwa: guzik'))

// WYNIK:  Kliknięto w kolejny przycisk. Nazwa: przycisk drugi

const buttonCompoNext = {
    name_btn_three: 'przycisk trzeci',
    showbtnthree: function () {
        clickmethree.textContent = `Kliknię w ${this.name_btn_three}`
    }
}


buttonThree.addEventListener('click', ()=> {
    buttonCompoNext.showbtnthree()
})