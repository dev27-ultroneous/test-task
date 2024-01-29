import { useRouter } from "next/router"

import { ROUTES } from "@/utils/constants";

export default function Unauthenticated() {
    const { push } = useRouter();

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="max-w-xs flex flex-col gap-y-2 items-center justify-center mx-auto text-lg font-medium">
                <p>You have to login to access this page</p>
                <div>
                    <button
                        className="border py-3 px-8 w-full text-base font-semibold flex justify-center items-center gap-x-1"
                        onClick={() => push(ROUTES.LOGIN)}
                    >
                        LOGIN
                    </button>
                </div>  
            </div>
        </div>
    )
}
