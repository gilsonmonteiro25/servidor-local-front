"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { toast } from "sonner"


export const RightSectionRegistro = () => {
    //useState
    const [nome, setNome] = useState("")
    const [numeroIdentificacao, setNumeroIdentificacao] = useState("")
    const [DataNascimento, setDataNascimento] = useState("")          
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const [pais, setPais] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [telefone, setTelefone] = useState("")
   const [role, setRole] = useState("")

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setNome(e.target.value)
            } else {
                setNome("")
            }
        };

        const changeNumeroIdentificacao = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setNumeroIdentificacao(e.target.value)
            } else {
                setNumeroIdentificacao("")
            }
        };

        const changeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setDataNascimento(e.target.value)
            } else {
                setDataNascimento("")
            }
        };

        const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setEmail(e.target.value)
            } else {
                setEmail("")
            }
        };
    
        const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setPassword(e.target.value)
            } else {
                setPassword("")
            }
        };

        const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setPais(e.target.value)
            } else {
                setPais("")
            }
        };

        const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setLocalidade(e.target.value)
            } else {
                setLocalidade("")
            }
        };

        const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setTelefone(e.target.value)
            } else {
                setTelefone("")
            }
        };

        const changeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value) {
                setRole(e.target.value)
            } else {
                setRole("")
            }
        };

        const handelRegistro = async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            // fetch API
            const response = await fetch( 'http://localhost:8080/users/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nome: nome,
                        numeroIdentificacao: numeroIdentificacao,
                        data_nascimento: DataNascimento,
                        email: email,
                        pasword: password,
                          pais: pais,
                          localidade: localidade,
                          telefone: telefone,
                        role:"cliente",
                        enabled: true,
                    }),
              });
              if (response.status === 200) {
                toast.success("utilizador criado com sucesso")   
                
                if (typeof window !== "undefined") {
                    window.location.href = "/login";
                }
               } else {
                toast.error("Não foi possivel criar conta,tente novamente.");
               }
            };
    
        console.log({ nome: nome, numeroIdentificaco: numeroIdentificacao, dataNascimento: DataNascimento, email: email, password: password, pais: pais, localidade: localidade, telefone: telefone, role: role });

return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
            <CardHeader>
            <span className="text-5xl font-bold">Create Your Account</span>
            </CardHeader>

            <CardContent>
                <div className="flex flex-col gap-5">

       
         <div className="flex flex-col gap-2">
                    <Label>Nome</Label>
                    <Input
                    type="text"
                    placeholder="Introduza Seu Name"
                    className="py-2 text-lg h-10"
                    value={nome}
                    onChange={changeNome}
                    />
                </div>
                
                 <div className="flex flex-col gap-2">
                    <Label>Numero Identificação</Label>
                    <Input
                    type="text"
                    placeholder=""
                    className="py-2 text-lg h-10"
                    value={numeroIdentificacao}
                   onChange={changeNumeroIdentificacao}
                    />
                </div>

                 <div className="flex flex-col gap-2">
                    <Label>Data Nascimento</Label>
                    <Input
                    type="text"
                    placeholder=""
                    className="py-2 text-lg h-10"
                    value={DataNascimento}
                    onChange={changeDataNascimento}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>email</Label>
                    <Input
                    type="text"
                    placeholder="exemple@exemple.com"
                    className="py-2 text-lg h-10"
                    value={email}
                    onChange={changeEmail}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label>password</Label>
                    <Input type="password" placeholder="your password..."
                     className="py-2 text-lg h-10"
                     value={password}
                     onChange={changePassword}
                     />
                </div>
                
                 <div className="flex flex-col gap-2">
                    <Label>pais</Label>
                    <Input
                    type="text"
                    placeholder="intoduza o pais"
                    className="py-2 text-lg h-10"
                    value={pais}
                   onChange={changePais}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label>localidade</Label>
                    <Input
                    type="text"
                    placeholder="introduza a localidade"
                    className="py-2 text-lg h-10"
                  value={localidade}
                 onChange={changeLocalidade}
                    />
                </div>

    <div className="flex flex-col gap-2">
                        <Label>Telefone</Label>
                        <Input
                        type="text"
                        placeholder="introduza o telefone"
                        className="py-2 text-lg h-10"
                    value={telefone}
                    onChange={changeTelefone}
                        />
                    </div>

                     <div className="flex flex-col gap-2">
                        <Label>role</Label>
                        <Input
                        type="text"
                        placeholder=""
                        className="py-2 text-lg h-10"
                    value={role}
                    onChange={changeRole}
                        />
                    </div>

                    <Button onClick={handelRegistro} className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Complete Registration</Button>
                </div>
                <div>
                    <span>Don't have an acount yet?</span>
                    <Link href="/login"className="text-[#13A4EC] font-semibold">
                    Sing in
                    </Link>
                </div>
            </CardContent>
            </Card>
        </div>
    )
}