function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute(
      'src',
      'https://xesque.rocketseat.dev/users/avatar/profile-502ad34c-525c-4366-aa75-f844f34f1771-1683544942826.jpg'
    )
  } else {
    img.setAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/105128106?v=4'
    )
  }
}
