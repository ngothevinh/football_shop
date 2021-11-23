
/*slider*/
var counter =1 ;
setInterval(function(){
    document.getElementById('radio' +counter).checked = true;
    counter++;
    if(counter>4){
        counter=1;
    }
},4000);


/*register*/
const modal=document.querySelector('.modal')
const registers=document.querySelector('.register')
const back=document.querySelector('.modal__register-back')
const next=document.querySelector('.modal__register-next')
const backBtn=document.querySelector('.modal-icon--btn--register')   

function addModal(){
    modal.classList.add('open')
}
function removeModal(){
    modal.classList.remove('open')   
}
registers.addEventListener('click',addModal)
back.addEventListener('click',removeModal)
next.addEventListener('click',removeModal)
backBtn.addEventListener('click',removeModal)



/*login*/
  const model1=document.querySelector('.modal1')
  const logins=document.querySelector('.login')
  const backLogin=document.querySelector('.modal__login-back')
  const nextLogin=document.querySelector('.modal__login-next')
  const backLoginBtn=document.querySelector('.modal-icon--btn--login')
  
  function addModel1(){
      model1.classList.add('open1')
  }
  function removeModal1(){
      model1.classList.remove('open1')
  }

  logins.addEventListener('click',addModel1)
  backLogin.addEventListener('click',removeModal1)
  nextLogin.addEventListener('click',removeModal1)
  backLoginBtn.addEventListener('click',removeModal1)