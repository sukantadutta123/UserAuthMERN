import { useContext } from 'react';
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Elder.ly Parent Dashboard</h1>
      <h3>Your health analysis is here.</h3>
      {!!user && (<h2>Hey {user.name}!</h2>)}
    </div>
  )
}
