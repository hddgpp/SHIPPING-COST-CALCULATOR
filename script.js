 const amount = document.querySelector('.js-the-amount')
        const logicBtn = document.querySelector('.logic-btn')
        const result = document.querySelector('.result')
        const remove = document.querySelector('.remove-btn')

        const storedOrder = JSON.parse(localStorage.getItem('orders'));

    if (storedOrder) {
      result.textContent = storedOrder > 50 ? 'Free shipping' : `$${storedOrder + 10}`;
    }

    function loigc() {
        const orders = Number(amount.value)

            if(!orders) {
              return result.textContent = 'you have to enter the amount'
            }

            result.textContent = orders > 50 ? 'Free shiping' : `$${orders + 10}`

            localStorage.setItem('orders', JSON.stringify(orders))
    }

        logicBtn.addEventListener('click', () => {
            loigc()
        })

        remove.addEventListener('click', () => {
            localStorage.removeItem('orders');
            result.textContent = '$0'
            amount.value = '';
        })

        amount.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
            loigc()
            }
        })
