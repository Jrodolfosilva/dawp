import next from "next";
import { Html } from "next/document";
import { useState } from "react";
import styles from "../../styles/header.module.css"


const Header =()=>{

    const [solution,setSolution] = useState<boolean>(false);
    const [help,setHelp] = useState<boolean>(false);
    


    return(
        <header className={styles.ContainerHeader}  >
            <div>
                <img src="" alt="logo-marca" />
            </div>
            <nav className={styles.menumain}>
                <ul>
                    <li>Home</li>
                    <li>Quem Somos</li>
                    <li
                    onClick={()=>{
                        setSolution(!solution);
                        setHelp(false)
                    }}
                    >
                        <img src="" alt="x" />
                        Nossas soluções
                        <div className={styles.submenu}>
                            {
                                solution&&<ul>
                                <li>Institucionais</li>
                                <li>E-commerce</li>
                                <li>Landing Page</li>
                                <li>Advogado Digital</li>
                                <li>Medicina Digital</li>
                                <li>Gestão de Trafégo</li>
                                <li>Gestão de Redes Sociais</li>
                                <li>Gestão de Conteúdo</li>
                                <li>Sistema de Agendamento</li>
                            </ul>

                            }
                            
                        </div>
                        
                        
                        </li>
                    <li>Blog</li>


                    <li  onClick={()=>{
                        setHelp(!help);
                        setSolution(false)

                    }}>

                    
                        <img src="" alt="?" />
                        Precisa de Ajuda

                        <div className={styles.submenu}>
                            {
                                help&&<ul>
                                <li>Faq</li>
                                <li>Falar com Suporte</li>
                            </ul>

                            }
                            
                        </div>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );

}

export default Header