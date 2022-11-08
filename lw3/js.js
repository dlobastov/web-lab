const btn = document.querySelector('#btn')
const total = document.querySelector('#total')
const input = document.querySelector('#input')


btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createdelete(input.value)
    input.value = ''
})

function createdelete(value) {
    console.log(value)

    const li = document.createElement('li')
    const delet = document.createElement('button')
    const ready = document.createElement('button')
    const div = document.createElement('div');


    li.className = 'li';
    li.textContent = value;
    delet.className = 'delet';
    delet.innerHTML = '<img src="./img/delete.svg">';

    li.appendChild(delet);

    ready.className = 'ready';
    ready.innerHTML = '<img src="./img/confirm.svg">';

    li.appendChild(ready);

    delet.addEventListener('click', (e) => {
        total.removeChild(li)
    })

    ready.addEventListener('click', (e) => {
        li.classList.toggle('create')
    })

    total.appendChild(li)
    
}
