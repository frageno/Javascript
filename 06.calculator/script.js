// GETTING VALUE FROM FORM

let select = document.getElementById('type');
let select_add = document.getElementById('additional');
let width = document.getElementById('width');
let height = document.getElementById('height');
let price = document.querySelector('.total');
let result = document.querySelector('.result');
let subtotal;
let total_with_option;
let total;




// BUTTON CLICK EVENT

let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{ 
    
        if ( select.options[select.selectedIndex].value === 'krotkie'){   
                total = (width.value * height.value) * 13  ; 
        }

        else {
            total = (width.value * height.value) * 15  ;
        }

                const choice = select_add.value;
                switch(choice){
                    case 'ozonowane':
                        total_with_option = (width.value * height.value) * 5;
                        subtotal = total + total_with_option;
                        price.innerText = subtotal + 'zł';
                        result.classList.add('active');
                        break;
                    case 'trzepanie':
                        total_with_option = (width.value * height.value) * 4;
                        subtotal = total + total_with_option;
                        price.innerText = subtotal + 'zł';
                        result.classList.add('active');
                        break;
                    case 'zapach':
                        total_with_option = (width.value * height.value) * 5;
                        subtotal = total + total_with_option;
                        price.innerText = subtotal + 'zł';
                        result.classList.add('active');
                        break;
                    case 'impregnacja':
                        total_with_option = (width.value * height.value) * 3;
                        subtotal = total + total_with_option;
                        price.innerText = subtotal + 'zł';
                        result.classList.add('active');
                        break;
                    case 'czyszczenie':
                        total_with_option = (width.value * height.value) * 3.5;
                        subtotal = total + total_with_option;
                        price.innerText = subtotal + 'zł';
                        result.classList.add('active');
                        break;
                        
                }
  
        if ((width.value == '') || (height.value == '')) {
            price.innerHTML = '<p style="color:red;">Wprowadź potrzebne wartości</p>';
        }

        

        
        
        
});