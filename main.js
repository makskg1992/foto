// const container = document.querySelector('.container');
// var gallery1 = document.querySelector('#gallery');
// fetch('jpg1.json')
// .then((response)=>{
//     return response.json();
// })

// .then((data)=>{
    
//     showImages(data)
// });

// function showImages(data){
//     for(let i=0; i < data.length;i++){
//         const link =document.createElement('a')
//         link.href='img/1/' +data[i];
       

//         gallery.append(link);
//         const img =document.createElement('img')
//         img.src='img/1/' +data[i];
//         link.append(img);
//     }
// }



// lightGallery(document.getElementById('gallery'), {
//     animateThumb: false,
//     zoomFromOrigin: false,
//     allowMediaOverlap: true,
//     toggleThumb: true,
// });



var gallery2 = document.querySelector('#gallery2');
fetch('jpg2.json')
.then((response)=>{
    return response.json();
})

.then((data1)=>{
    
    showImages(data1)
});

function showImages(data1){
    for(let i=0; i < data1.length;i++){
        const link2 =document.createElement('a')
        link2.href= data1[i];
        link2.setAttribute('download','download');
       gallery2.append(link2);
        const img =document.createElement('img')
        img.src=data1[i];
        link2.append(img);
    }
}












// let form = document.querySelector('.js-form'),
//     formInputs = document.querySelectorAll('.form-control'),
//     inputEmail = document.querySelector('.js-input-email'),
//     inputPhone = document.querySelector('.js-input-phone'),
//     inputCheckbox = document.querySelector('.js-input-checkbox');


// function validateEmail(email) {
//     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// function validateCountry(country) {
//     let re = new RegExp('.co$');
//     return re.test(String(country).toLowerCase());
// }

// function validatePhone(phone) {
//     let re = /^[0-9\s]*$/;
//     return re.test(String(phone));
// }

// form.onsubmit = function () {
//     let emailVal = inputEmail.value,
//         phoneVal = inputPhone.value,
//         emptyInputs = Array.from(formInputs).filter(input => input.value === '');

//     formInputs.forEach(function (input) {
//         if (input.value === '') {
//             input.classList.add('is-invalid');

//         } else {
//             input.classList.add('is-valid');
//             input.classList.remove('is-invalid');
//         }
//     });

//     if (emptyInputs.length !== 0) {
//         console.log('inputs not filled');
//         return false;
//     }

//     if(!validateEmail(emailVal)) {
//         console.log('email not valid');
//         inputEmail.classList.add('is-invalid');
//         return false;
//     } else {
//         inputEmail.classList.add('is-valid');
//         inputEmail.classList.remove('is-invalid');
//     }

//     if (validateCountry(emailVal)) {
//         console.log('email from Columbia');
//         inputEmail.classList.add('error');
//         return false;
//     } else {
//         inputEmail.classList.remove('error');
//     }

//     if (!validatePhone(phoneVal)) {
//         console.log('phone not valid');
//         inputPhone.classList.add('error');
//         return false;
//     } else {
//         inputPhone.classList.remove('error');
//     }

//     if(!inputCheckbox.checked) {
//         console.log('checkbox not checked');
//         inputCheckbox.classList.add('error');
//         return false;
//     } else {
//         inputCheckbox.classList.remove('error')
//     }


// }




// const music = document.querySelector('.music');
// var music = document.querySelector('.music');
// fetch('./mp3.json')
// .then((response)=>{
//     return response.json();
// })

// .then((data)=>{
    
//     showImages(data)
// });

// function showImages(data){
//     for(let i=0; i < data.length;i++){
//         const link =document.createElement('audio')
//         link.src='./mp3/' +data[i];
//         link.controls=true;

//         music.append(link);
//         // const img =document.createElement('img')
//     //     img.src='./img/' +data[i];
//     //     link.append(img);
//     }
// }