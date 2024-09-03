import { School } from 'lucide-react'
import React from 'react'
import InputText from '../Input'

const Content = () => {
  return (
    <div className=''>
      <div className='text-base flex flex-row py-3 px-5 gap-3'>
        <School color="#E2E8F0"/>
        <span className='text-base text-slate-50 font-bold'>Vida Acadêmica e Ocupações/Profissão</span>
      </div>
      <div className='bg-slate-700/50 rounded-md border-slate-700 border-2 p-8 flex flex-col gap-6'>
        <InputText label={'O atleta frequentou a escola por quantos anos?'}/>
        <InputText label={'Nível Educacional? (1 grau completo (Ensino Fundamental),  2 grau completo (Ensino Médio), 3 grau completo)'}/>
        <InputText label={'Especificar histórico acadêmico do atleta (como foi sua performance acadêmica?):'}/>
        <InputText label={'Especificar histórico de facilidades e dificuldades acadêmicas:'}/>
        <InputText label={'Especificar outras áreas de interesse do atleta (hobbies, lazer, objetos etc.):'}/>
        <InputText label={'Descrever as atividades profissionais ou de ocupações anteriores do atleta:'}/>
        <InputText label={'Descreva as características do atleta no desempenho das atividades ocupacionais ou profissionais:'}/>
      </div>
    </div>
  )
}

export default Content