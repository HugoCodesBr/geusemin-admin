import { useState } from 'react'

import './index.css'

const configurationList = [
    {
        title: "Push de notificação desktop",
        desc: "Receba notificação push sobre menções, comentários, alertas, alterações de edição, fornecimento e cumprimento de metas",
        active: true
    },
    {
        title: "Notificações por email",
        desc: "Receba notificação push sobre menções, comentários, alertas, alterações de edição, fornecimento e cumprimento de metas",
        active: false
    },
    {
        title: "Tema escuro",
        desc: "Use as configurações do sistema para ativar o tema escuro",
        active: false
    },
    {
        title: "Notificação sonora",
        desc: "Use as configurações do sistema para ativar o tema escuro",
        active: true
    },
]

const Configurations = () => {
    const [configurations, setConfigurations] = useState(configurationList)

    const handleToggle = (index) => {
        configurations[index].active = !configurations[index].active
        setConfigurations([...configurations])
    }

    return (
        <div className="container">
            <div className='configurations'>
                <h2>Configurações</h2>
                <div className="configurations__items">
                    {configurations.map((item, index) => (
                        <div key={index} className="configurations__item">
                            <div className="configurations__info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className={`configurations__toggle ${item.active ? "active" : ""}`} onClick={() => handleToggle(index)}>
                                <span className={`configurations__circle ${item.active ? "active" : ""}`}></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Configurations