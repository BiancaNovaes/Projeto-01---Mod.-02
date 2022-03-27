const elementoelemento = document.getElementById('elemento'); 
const elementoTemperamento = document.querySelector('#temperamento');
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 


elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assents/Midia/TERRA.PNG'
        elementoelemento.innerText = 'TERRA' 
        elementoTemperamento.innerText = 'Melancólico, menos ação, mais vontade' 
        elementoBtn.value = 'segundo' 

    } else if(elementoBtn.value == 'segundo'){ 
        elementoImg.src = './assents/Midia/AR.PNG' 
        elementoelemento.innerText = 'AR' 
        elementoTemperamento.innerText = 'Sanguíneo, mais vontade, menos ação'
        elementoBtn.value = 'terceiro' 

    } else { 
        elementoImg.src = './assents/Midia/ÁGUA.PNG'
        elementoelemento.innerText = 'ÁGUA' 
        elementoTemperamento.innerText = 'Fleumático, menos ação'                  
    } 
})