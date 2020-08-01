import Link from 'next/link';

// Navigate without full reload
export default function Details(){
    return (
    <div>
        <h2> Details </h2>
        <Link as="/story/epic" href="/[story]/[epic]">
            <a>to story/epic</a> 
        </Link>
    </div>
    ) 
}