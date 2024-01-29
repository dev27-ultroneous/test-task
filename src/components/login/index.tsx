import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';


import { getLocalStorageItem, setLocalStorageItem } from '@/utils/helper';
import { ROUTES } from '@/utils/constants';
import { LoginSchema } from '@/utils/validation-schema';
import { LoginFormValues } from '@/utils/types';
import FloatingInput from '../common/floating-input';
import CircularLoader from '../common/circular-loader';
import { loginWithUsername } from '@/services/auth';


export default function LoginForm() {
    const { push } = useRouter();

    const [isLoading, setLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = async (validatedData: LoginFormValues) => {
        try {
            setLoading(true);
            const { username, password } = validatedData;
            const data = await loginWithUsername(username, password);
            if (!data.token) {
                throw new Error("Token not found in response data.");
            }
            setLocalStorageItem("session", data?.token);
            reset();
            push(`${ROUTES.HOME}`);
        } catch (error) {
            alert("Error in login process")
            console.error(error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <p
                className={`mb-8 text-4xl leading-none font-adonis-web tracking-tight text-dark text-center`
                }
            >
                Login
            </p>
            <form
                className="w-full flex flex-col gap-y-2 max-w-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <FloatingInput
                        className="mb-2"
                        error={errors.username?.message}
                        inputClasses="rounded-xl !border-[#ccc]"
                        label="Username"
                        type="text"
                        data-testid="username"
                        {...register('username', { required: true })}
                    />
                    <FloatingInput
                        className="mb-2"
                        error={errors.password?.message}
                        inputClasses="rounded-xl !border-[#ccc]"
                        label="Password"
                        type="password"
                        data-testid="password"
                        {...register('password', { required: true })}
                    />
                </div>

                <button
                    className="border py-3 px-8 w-full text-base font-extrabold flex justify-center items-center gap-x-1"
                    type="submit"
                >
                    <CircularLoader
                        open={isLoading}
                        aria-hidden="true"
                        className="inline w-5 h-5 mr-2 animate-spin fill-white text-gray-400" />
                    Submit
                </button>
            </form>
        </>
    );
}
