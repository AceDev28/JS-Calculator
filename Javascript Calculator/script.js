
const calculator = document.querySelector('#main-cal-body')

const keys = calculator.querySelector('#calculator-key-grid')

keys.addEventListener('click',
    // function
    e => 
    { if (e.target.matches('button'))
        {
            // do things
                        //
            const key = e.target
            const action = key.dataset.action

            if(!action)
            {
                console.log("This is a number key")
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


