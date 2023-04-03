import '../styles/TextInput.scss'

function TextInput (props) {
  return (
    <div className='text-input-container'>
      <label>
        {props.label}
      </label>
      <input {...props} />
    </div>
  )
}

export default TextInput
