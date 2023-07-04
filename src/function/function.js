const WindowScroll = () => {
    window.addEventListener(`scroll`, () => {
        let header = document.querySelector(`.header`);
        header.classList.toggle(`sticky`, window.scrollY > 0)
    })
};

WindowScroll()


// const telModal = document.querySelector(`.phone`),
//     closeModal = document.querySelector(`.closeImg`),
//     closeBtn = document.querySelector(`.closeBtn`),
//     modal = document.querySelector(`#modal`),
//     modalOut = document.querySelector(`.modal-out`),
//     modalForm = document.querySelector(`.modalForm`),
//     modalTwo = document.querySelector(`.modal-Two`);

// function Modal() {
//     telModal.addEventListener(`click`, () => {
//         modal.className = `active`;
//     })
//     closeModal.addEventListener(`click`, () => {
//         modal.removeAttribute(`class`, `active`);
//     })
//     closeBtn.addEventListener(`click`, () => {
//         modal.removeAttribute(`class`, `active`);
//     })
//     modalForm.addEventListener(`submit`, (m) => {
//         m.preventDefault()
//         modalOut.style.display = `none`;
//         modalTwo.style.display = `block`;
//     })
// // }

// // Modal();
