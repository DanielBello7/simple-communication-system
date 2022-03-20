


import { useState } from "react";
import ComponentLoader from "../ComponentLoader";

export default function UserProfileTab() {
  const [profileLoading, setProfileLoading] = useState(false);
  if (profileLoading) return <ComponentLoader />
  else return <div>User Profile Tab</div>
}