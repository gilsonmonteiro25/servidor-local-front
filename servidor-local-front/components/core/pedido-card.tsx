import { Card, CardContent } from "../ui/card"

interface CategoriaType {
    id: string;
    nome: string;
    icone: string;
}
interface PedidoCardProps {
    title: string;
    desciption: string;
    image: string;
    category: CategoriaType;
}
export const PedidoCard = (PedidoCardProps: PedidoCardProps) => {
    return (
        <Card>
            <CardContent>
                <div>
                    <img src="/" alt="12" />
                    <h1 className="font-bold">Emergenncy Plumbing</h1>
                    <p>24/7 suport for leaks, pipe bursts, and urgent drainage issues</p>
                </div>
                <button className="ml-auto bg-[#13A4EC] rounded-md text-white font-bold py-3 shadow-lg px-6"> Browse Providers</button>
            </CardContent>
        </Card>
































































































    )
}
