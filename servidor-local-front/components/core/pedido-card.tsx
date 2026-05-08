import { Wrench } from "lucide-react";
import { Card, CardContent } from "../ui/card"
import Image from "next/image";
import { Button } from "../ui/button";

export interface CategoriaType {
    id: string;
    nome: string;
    icone: string;
    
}
export interface PedidoCardProps {
    title: string;
    description: string;
    image: string;
    category: CategoriaType;
}
export const PedidoCard = (PedidoCardProps: PedidoCardProps) => {
    return (
        <Card className="w-[340px] overflow-hidden rounded-3xl shadow-lg border-0">
            <div className="relative h-44 w-full">
                <Image
                    src={PedidoCardProps.image} 
                    alt={PedidoCardProps.title}
                    fill
                    className="object-cover"
                />

                {/* Icone */}
                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
                    <Wrench className="h-7 w-7 text-blue-500" />
                </div>
            </div>
            <CardContent className="space-y-5 p-6">
                
                <div>
                    <h2 className="text-2xl font-bold">
                        Emergency Plumbing
                    </h2>

                    <p className="mt-2 text-gray-500">
                        24/7 support for leaks, pipe bursts,
                        and urgent drainage issues.
                    </p>
                </div>

                
                <div className="border-t" />

                {/* Footer */}
                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                            Starting at
                        </p>

                        <p className="text-3xl font-bold">
                            $89.00
                        </p>
                    </div>

                    <Button className="rounded-xl bg-blue-500 px-6 py-6 text-white hover:bg-blue-600">
                        Browse Providers
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}