import { useCallback, useEffect, useState } from "react";

import { getUserDetails } from "@/services/auth";
import { getLocalStorageItem } from "@/utils/helper";
import { Status, type AuthContainerPropType } from "@/utils/types";
import { useRouter } from "next/router";
import Unauthenticated from "./unauthenticated";
import Loader from "./loader";

export default function AuthContainer({ children }: AuthContainerPropType) {
    const [status, setStatus] = useState<Status>(Status.LOADING);

    const { pathname, push } = useRouter();
    
    useEffect(() => {
        const session = getLocalStorageItem("session");
        if (!session) { 
            setStatus(Status.UNAUTHENTICATED);
            return;
        }
        getUserDetails().then((val) => {
            setStatus(Status.AUTHENTICATED);
        }).catch(() => {
            setStatus(Status.UNAUTHENTICATED);
        })
    }, [])

    const getActiveComponent = useCallback((status:string) => {
        switch (status) {
            case Status.LOADING:
                return <Loader/>;
            
            case Status.UNAUTHENTICATED:
                return <Unauthenticated/>;
            
            case Status.AUTHENTICATED:
                return <>{children}</>;
        }
    }, [children])

    
    
    return (
        <>{getActiveComponent(status)}</>
    )
}
