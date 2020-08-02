import { useRouter } from 'next/router';
import Head from 'next/head'

import { HomePage } from '../../container/Homepage.tsx'

export default function Main() {
    const router = useRouter();
    console.log(router.query);
    console.log(router);
    return (<HomePage />);
}