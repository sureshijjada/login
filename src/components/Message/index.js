// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  return (
    <div>
      {isLogin ? (
        <p className="style">Welcome User</p>
      ) : (
        <p className="style">Please Login</p>
      )}
    </div>
  )
}

export default Message
