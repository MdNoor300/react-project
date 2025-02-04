const Card = ({children, bg="bg-gray-100"}) => {
  return (
    <div className={`p-6 shadow-lg rounded-lg text-center ${bg}`}>
        {children}
    </div>
  )
}

export default Card