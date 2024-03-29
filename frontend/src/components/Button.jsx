const Button = ({label,onPress}) => {
  return (
    <div>
      <button className="w-full bg-black active:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-lg" onClick={onPress}>
  {label}
</button>
    </div>
  )
}

export default Button;