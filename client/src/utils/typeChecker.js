
const type = {
  email: 'email',
  avatar: 'file',
}

export default (inputName) => type[inputName] || 'text'
