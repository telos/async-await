
function getSugar() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('sugar'), 2000
    })
  })
}

function getMilk() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('milk'), 2000
    })
  })
}

function getCoffee() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('coffee'), 2000
    })
  })
}

async function go() {
  // Execute promises in order using traditional promises
  getSugar().then((sugar) => {
    console.log(sugar)
  }).catch((e) => {
    console.error(e)
  })

  getMilk().then((milk) => {
    console.log(milk)
  }).catch((e) => {
    console.error(e)
  })

  getCoffee().then((coffee) => {
    console.log(coffee)
  }).catch((e) => {
    console.error(e)
  })

  getSugar().then((sugar) => {
    getMilk().then((milk) => {
      getCoffee().then((coffee) => {
        console.log(sugar, milk, coffee)
      }).catch((e) => {
        console.error(e)
      })
    }).catch((e) => {
      console.error(e)
    })
  }).catch((e) => {
    console.error(e)
  })

  try {
    // Execute promises in order using async-await
    // Sugar
    const sugar = await getSugar()
    console.log(sugar)

    // Milk
    const milk = await getMilk()
    console.log(milk)

    // Coffee
    const coffee = await getCoffee()
    console.log(coffee)

    // Await all three promises coming back prior to returning
    const [sugarP, milkP, coffeeP] = await Promise.all([getSugar(), getMilk(), getCoffee()])
    console.log(sugarP, milkP, coffeeP)
  } catch (e) {
    console.error(e)
  }
}

go()
