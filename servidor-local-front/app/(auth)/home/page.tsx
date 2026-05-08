import { PedidoCard } from "@/components/core/pedido-card";


const componentsCard = [
    {
        id: 1,
        title: "Emergency Plumbing",
        description: "24/7 support for leaks, pipe bursts and urgent drainage issues.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧", price: "$89.00" }
    },

    {
        id: 2,
        title: "Light Fixture Intallation",
        description: "Professional installation for chandeliers, sconces, and recessed lighting.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 2, name: "Plumbing", icone: "🔧", price: "$120-$250" }
    },

    {
        id: 3,
        title: "Custom Cabinetry",
        description: "Bespoke storage soluctions and repairs for your kitchen or living space.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧", price: "$450.00" }
    },

    {
        id: 4,
        title: "Interior Wall Painting",
        description: "Precision painting for single rooms or entire home interiors",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧", price: "$2.50/sqft" }
    },

    {
        id: 5,
        title: "AC Maintenance",
        description: "Seasonal cleaning and efficiency checks for cooling systems.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧", price: "$125.00" }
    },

    {
        id: 6,
        title: "Smart Lock Setup",
        description: "Installation and synchronization of digital security locks and cameras.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧", price: "150-$300" }
    }
]



export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}

            <div className="flex flex-wrap gap-6">
                {componentsCard.map((cardPedido) => (
                    <PedidoCard
                        key={cardPedido.id}
                        title={cardPedido.title}
                        description={cardPedido.description}
                        image={cardPedido.image}
                        category={{
                            id: "1",
                            nome: "construção civil",
                            icone: "/icone-placeholder.png"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}