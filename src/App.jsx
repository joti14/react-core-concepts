import Counter from './Counter'
import Batsman from './batsman'
import Users from './Users'
import './App.css'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'
import CounterApp from './CounterApp'
import Toggle from './Toggle'
import UserList from './UserList'

const fetchUserList = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

function App() {

  const userPromise = fetchUserList();
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();

  function handleClick() {
    alert('I am clicked')
  }

  const handleClick3 = () => {
    alert('clicked')
  }

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }
  
  return (
    <>
      <h3>React core concepts</h3>

      <Suspense fallback={<h4>User list loading...</h4>}>
        <UserList userPromise={userPromise}></UserList>
      </Suspense>

      <Toggle></Toggle>

      <CounterApp></CounterApp>

      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>

        <Posts postsPromise={postsPromise}></Posts>

      </Suspense> */}

      {/* <Suspense fallback = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>                                                                                       
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Counter></Counter>
      <Batsman></Batsman>

      <br />
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button> <br />
      {/* <button onClick={function handleClick2(){
        alert('clicked 2')
        }}>Click Me 2</button> */}

      <button onClick={handleClick3}>Click 3</button> <br />
      <button onClick={()=>{
        alert('clicked 4')
      }}>Click Me 4</button>
      <br />
      <button onClick={() => handleClick5(10)}>Clicked 5</button>

    </>
  )
}

export default App
