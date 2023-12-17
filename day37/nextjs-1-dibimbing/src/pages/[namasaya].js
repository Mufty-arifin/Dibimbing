import { useRouter } from 'next/router'

export default function NamaSayaPage() {
    const router = useRouter()
    return (
        <div>
            <h1>Nama Saya Adalah</h1>
            <h1>{router.query.namasaya}</h1>
        </div>
    )
}