import { useRouter } from 'next/router'

export default function NamaSayaPage() {
    const router = useRouter();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${router.query.idUser}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false)
        });
    } , [router.query.userId]);



    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}