import { useEffect, useState } from "react";

import Container from "@/components/common/container";
import UserDetails from "@/components/user-details";
import { getUserDetails } from "@/services/auth";
import type { UserDetailsType } from "@/utils/types";

export default function Home() {
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);

  useEffect(() => {
    getUserDetails().then((val) => {
      setUserDetails(val);
    }).catch((error) => {
      console.error(error);
    })
  }, [])
  
  return (
    <Container className="px-32">
      <UserDetails {...{ userDetails }} />
    </Container>
  );
}
