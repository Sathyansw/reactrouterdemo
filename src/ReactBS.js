import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function ReactBS() {
  const [show,setShow] = useState(true)
  if(show)
  {
    return (
      <div>
         <Alert variant='danger' onClose={() => setShow(false)} dismissible>
     <Alert.Heading>
       This is alert heading
     </Alert.Heading>
         <p>Hello World Hello World Hello World Hello World
         Hello WorldHello WorldHello WorldHello WorldHello World
         Hello WorldHello WorldHello WorldHello WorldHello World</p>
     <Alert.Link href="">
         Click to open this link
     </Alert.Link>
     </Alert>
      </div>
    )
  }
  
}

export default ReactBS



// import React from 'react'
// import { Alert, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// function ReactBS() {
//   return (
//     <div>
//     <Alert variant='danger'>
//     <Alert.Heading>
//       This is alert heading
//     </Alert.Heading>
//         <p>Hello World Hello World Hello World Hello World
//         Hello WorldHello WorldHello WorldHello WorldHello World
//         Hello WorldHello WorldHello WorldHello WorldHello World</p>
//     <Alert.Link href="">
//         Click to open this link
//     </Alert.Link>
//     </Alert>
//     {/* <Button href="https://www.google.com" variant='danger'>Submit</Button>
//     <Button variant='danger' active >Submit</Button>
//     <Button variant='danger' disabled >Submit</Button> */}
//     {/* <Button variant='danger' size='lg'>Submit</Button>
//     <Button variant='danger'>Submit</Button>
//     <Button variant='danger' size='sm'>Submit</Button> */}
//       {/* <Button>Submit</Button>
//       <Button variant='danger'>Submit</Button>
//       <Button variant='dark'>Submit</Button>
//       <Button variant='success'>Submit</Button>
//       <Button variant='warning'>Submit</Button>
//       <Button variant='secondary'>Submit</Button> */}
//     </div>
//   )
// }

// export default ReactBS
