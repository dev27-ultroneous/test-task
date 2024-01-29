import { useRouter } from "next/router";
import Image from "next/image";

import { ROUTES } from "@/utils/constants";
import { removeLocalStorageItem } from "@/utils/helper";
import type { UserDetailsPropsType } from "@/utils/types";

export default function UserDetails({ userDetails }: UserDetailsPropsType) {
    const { push } = useRouter();

    const handleLogout = () => {
        removeLocalStorageItem("session");
        push(ROUTES.LOGIN)
    }

    if (userDetails) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="max-w-xs flex flex-col gap-y-2 items-center justify-center mx-auto text-lg font-medium">
                    <Image width={100} height={100} src={userDetails.image} alt={userDetails.firstName} />
                    <p className="">{userDetails.email}</p>
                    <p>{`${userDetails.firstName} ${userDetails.lastName}`}</p>
                    <button
                        className="border py-3 px-8 w-full text-base font-semibold flex justify-center items-center gap-x-1"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    }
    return <></>;
}
