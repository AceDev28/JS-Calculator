
// allow calculator to listen to all ketpress
// allow the use of event delegation because all key are child of cal-key-grid
const calculator = document.querySelector('#main-cal-body')

const keys = calculator.querySelector('#calculator-key-grid')

const display = document.querySelector("#output-display")

// create evemt listener on click, execute the arrow function inside
keys.addEventListener('click',
    // function
    e => 
    { 

        
        // if the target match the element inside ( button in this case ) run
        if (e.target.matches('button'))
        {

            var x = document.getElementById("output-display")
            console.log("xx")
            console.log(x.clientWidth)
            console.log("yy")
            console.log(x.scrollWidth)
            if(x.clientWidth < x.scrollWidth  && x.style.fontSize != "150%" && x.style.fontSize != "100%"){
                x.style.fontSize = "150%";
            }
            else if(x.clientWidth < x.scrollWidth  && x.style.fontSize == "150%"){
                x.style.fontSize = "100%";
            }
            // var point to data-action ( dataset to action )
            const key = e.target
            // get data-action of key
            const action = key.dataset.action
            // get textConten of key 
            const keyContent = key.textContent
            // get display textContent
            const displayContent = display.textContent

            console.log(display.textContent + " haha");
            // if the key press are number ( no data-action )
            if(!action)
            {
                // if the current number on screen is 0
                if(displayContent === '0')
                {   
                    // change the content to the first key press
                    display.textContent = keyContent
                }
                else
                {
                    // concaternate the number to the current content
                    display.textContent = displayContent + keyContent
                }
            }
            // if the operant key are pressed
            if(
                action ==='add'     ||
                action ==='subtract'||
                action ==='multiply'||
                action ==='divide'
            )
            {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'))
                // add pressed clas s to the pressed key
                key.classList.add('pressed')
            }

            // if te decimal key if pressed
            if( action === 'decimal')
            {
                // it will add the decimal point to the current number
                display.textContent = displayContent + '.'
            }

            // if the equal key is pressed
            if( action === 'calculate' )
            {

                console.log("This is an equal key")
            }

            // if the AC key is pressed 
            if( action === 'delete' )
            {
                // change the current conttent of the display screen to 0
                display.textContent = '0'
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'))
            }
            
            // remove pressed class from the pressed key
            
        }

    }
)

