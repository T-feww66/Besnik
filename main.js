const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const liItems = $$('.navbar ul li');

liItems.forEach( li => {
    li.onclick = function() {
        $('.navbar ul li.active').classList.remove('active');
        this.classList.add('active');
    }
})

