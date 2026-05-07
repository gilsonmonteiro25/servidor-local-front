import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>

            <PedidoCard
                title="Instalar porta de entrada"
                desciption="Preciso instalar uma porta de entrada em uma casa"
                image="/placeholder.png"
                category={{
                    id: "1",
                    nome: "construção civil",
                    icone: "/icone-placeholder.png"
                }}
            />
        </div>
    )
}
