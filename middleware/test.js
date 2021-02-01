// export default function (context) {
//      // eslint-disable-next-line no-console
//   // console.log('I am from middleware')
//   // eslint-disable-next-line no-undef

//   // return context.$axios
//   //   .$post('https://reqres.in/api/login', {
//   //     email: 'eve.holt@reqres.in',
//   //     password: 'cityslicka',
//   //   })
//   //   .then((res) => {
//   //     if (res.token !== 'QpwL') {
//   //       context.redirect('/')
//   //     }
//   //   })
//   // ---or---------
// }

export default function ({ $axios, redirect }) {
  return $axios
    .$post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    })
    .then((res) => {
      if (res.token !== 'QpwL') {
        redirect('/')
      }
    })
}
