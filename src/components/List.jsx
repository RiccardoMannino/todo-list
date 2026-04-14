function List(props) {

  const {children , className} = props

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default List
