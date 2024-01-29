import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ROUTES } from '@/utils/constants';
import { getLocalStorageItem } from '@/utils/helper';
import Container from '@/components/common/container';
import LoginForm from '@/components/login';

export default function Login() {
    const { push } = useRouter();


    useEffect(() => {
        const session = getLocalStorageItem("session");
        if (session) {
            push(ROUTES.HOME);
        }
    }, [push])


    return (
        <Container className='px-32 min-h-screen flex flex-col justify-center items-center'>
            <LoginForm />
        </Container>
    );
}
