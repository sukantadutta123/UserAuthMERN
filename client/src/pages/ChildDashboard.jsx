import { useContext } from 'react';
import { UserContext } from "../../context/userContext";

export default function ChildDashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Elder.ly Child Dashboard</h1>
      <h3>Your parent health analysis is here.</h3>
      {!!user && (<h2>Hey {user.name}!</h2>)}
    </div>
  )
}
