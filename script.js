let buttery_view = document.querySelector('#battery')
let speed_view = document.querySelector('#speed')
let img = document.querySelector('#img')
let img2 = document.querySelector('#img2')

let curr_img = 750
let curr_speed = 60

img.onclick = () => {
    if (curr_speed <= 75) {
        curr_speed += 5
        curr_img -= 10
    }

    buttery_view.innerHTML = `${curr_img} км`
    speed_view.innerHTML = `${curr_speed} км/ч`
}

img2.onclick = () => {
    if (curr_speed >= 25) {
        curr_speed -= 5
        curr_img += 10
    }

    buttery_view.innerHTML = `${curr_img} км`
    speed_view.innerHTML = `${curr_speed} км/ч`
}

function incCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count < 40) {
        count += 5;
        countElement.innerText = count;
    }
}

function incCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count < 40) {
        count += 5;
        countElement.innerText = count + '°';
    }
}

function decCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count > 5) {
        count -= 5;
        countElement.innerText = count + '°';
    }
}

function toggleSwitch() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);
    let toggleSwitch = document.querySelector('#toggleSwitch');

    if (count < 10) {
        toggleSwitch.checked = false;
    } else {
        toggleSwitch.checked = true;
    }
}

// modal window
let modal_bg = document.querySelector('.modal_bg')
let open_btns = document.querySelectorAll('label[data-open]')
let close_btns = document.querySelectorAll('[data-close]')

open_btns.forEach(btn => {
    btn.onclick = () => {
        modal_bg.style.display = "flex"
    }
})

close_btns.forEach(btn => {
    btn.onclick = (event) => {
        let trg = event.target

        if (trg !== btn) {
            return
        }

        modal_bg.style.display = "none"
    }
})

let natural = document.querySelector('#natural')
let white = document.querySelector('#white_dealership')
let black = document.querySelector('#black')
let img3 = document.querySelector('[data-img]')
let big_photo = document.querySelector('#big_photo')

natural.onclick = () => {
    big_photo.setAttribute('src', './img/natural_salon3.jpg.webp')
}

white_dealership.onclick = () => {
    big_photo.setAttribute('src', './img/white_salon2.jpg.webp')
}

black.onclick = () => {
    big_photo.setAttribute('src', './img/black_salon1.jpg.webp')
}

let whites = document.querySelector('#white')
let space_grey = document.querySelector('#space_grey')
let img_baxtzod = document.querySelector('#photo_macbook')
let img2_baxtzod = document.querySelector('#photo_macbook2')
let h1_buy = document.querySelector('#h1_buy')
let color_name = document.querySelector('#color_name')


let btns = document.querySelectorAll('.btn_blue')

let prev = 0

btns.forEach((btn, idx) => {
    btn.onclick = () => {
        btns[prev].classList.remove('active')
        btn.classList.add('active')

        if (idx === 0) {

            img2_baxtzod.setAttribute('src', './img/tesla_wheels_2.png')
            img_baxtzod.setAttribute('src', './img/tesla_wheels_2.png')


            if (color_name.innerText === "19") {
                color_name.innerText = "21"
            } else {
                color_name.innerText === "19"
            }
        } else {
            img2_baxtzod.setAttribute('src', './img/whells_tesla.png')
            img_baxtzod.setAttribute('src', './img/whells_tesla.png')

            if (color_name.innerText === "21") {
                color_name.innerText = "19"
            } else {
                color_name.innerText === "21"
            }
        }

        prev = idx
    }
})


let price = document.querySelector('#price')
let toogle_price = document.querySelector('#toogle_price')

toogle_price.onclick = () => {
    if (style.innerHTML === 1000) {
        toogle_price.checked = false;
    } else {
        toogle_price.checked = true;
    }
}