import {useRouter} from 'next/router';

export default function Epic(){
    const router = useRouter();
    console.log(router.query);
    console.log(router);
    return <h2>Epic</h2>
}