import { useRouter } from 'next/router';

export default function Main() {
    const router = useRouter();
    console.log(router.query);
    console.log(router);
    return <h2>Message</h2>
}