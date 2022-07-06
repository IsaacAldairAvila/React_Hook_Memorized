import { memo } from "react"
import  { isEqual } from 'lodash'
const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
}, isEqual)

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}

export default MyList
