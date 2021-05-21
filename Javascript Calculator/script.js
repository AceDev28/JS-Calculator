
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
            // var point to data-action ( dataset to action )
            const key = e.target
            // get data-action of key
            const action = key.dataset.action
            // get textConten of key 
            const keyContent = key.textContent
            // get display textContent
            const displayContent = display.textContent
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
            
            if(
                action ==='add'     ||
                action ==='subtract'||
                action ==='multiply'||
                action ==='divide'
            )
            {
                console.log("This is an operant key")
            }

            if( action === 'decimal')
            {
                console.log("This is a decimal key")
            }

            if( action === 'calculate' )
            {
                console.log("This is an equal key")
            }

            if( action === 'delete' )
            {
                console.log("This is a delete key")
            }
        }

    }
)





