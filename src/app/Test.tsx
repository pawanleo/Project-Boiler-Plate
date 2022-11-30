import React, { ExoticComponent, FunctionComponent } from 'react'
import { connect } from 'react-redux'

interface TestProps {
  user: string
}
// type User= {
//     username: string;
//     password: string;
//     name:string
// }
// interface Obj1 {
//   data: User[]
// }
// let obj1:Obj1 = {
//   data: [
//     {username: "",
//     password: "",
//     name:""}
//   ],
// };


// interface Obj2 extends Obj1 {
//     extraData:{
//         name:string,
//         ph:number
//     }
// }
// let obj2:Obj2={
//     extraData :{
//         name:"",
//         ph:234234234234
//     },
//     data:[{
//         username:"",
//         password:"",
//         name:""
//     }]
// }
const Test = (props: TestProps) => {
  console.log(props.user)
  return (

    <p>

    </p>
  )
}
const mapStateToProps = (state: any) => ({

  user: state.user
})

export default connect(mapStateToProps,)(Test)