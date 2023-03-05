import Header from "@/components/header/Header";
import next from "next";
import Image from "next/image";
import styles from "../../styles/home.module.css";
import Link from "next/link";

const HomeMain=()=>{


    return(
        <>
        
        <section className={styles.ContainerHome}>
         <div className={styles.ContainerContent}>
            <h1>
            Trabalhamos para Implusionar, o sucesso do seu Négocio no Mercado Digital.
            </h1>
            <span></span>
            <p>
                Desenvolvemos soluções para peguenas e médias empresas, utilizamos as tecnologias mais recentes para construir de Landing pages, Sites Instituicionais, E-commerces e Aplicações Web.
            </p>
            <div>
                <button>IMPLUSIONAR MEU NÉGOCIO</button>
                <button>CONHEÇA NOSSAS SOLUÇÕES</button>
            </div>
         </div>
         <div className={styles.Containercreative}>
            <img src="/images/bannermain.png" alt="img" />
         </div>
        </section>

        <section id="sobre" className={styles.ContainerAbout}>

            <div className={styles.AboutCreative}>
               
              <img
                   src="/images/img-about.jpg"
                   alt="iconlogo"
                />
               
            </div>

            <div className={styles.AboutContent}>
                <span>Quem Somos?</span>
                <h2>
                    Utilizamos tecnologia a favor do pequeno e médio empreendedor

                </h2>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-1.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Oferecemos consultoria financeira para ajudar os colaboradores a superar desafios e realizar sonhos
                    </p>
                </div>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-2.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Diagnosticamos a raiz dos problemas financeiros e entregamos a melhor solução para cada caso
                    </p>
                </div>
                <div>
                    <Image
                        src="/icones/icon-o-que-somos-3.svg"
                        width={60} 
                        height={60}
                        alt="iconlogo"
                    />
                    <p>
                        Monitoramos a saúde financeira dos colaboradores, reportando os dados para os RH's das empresas
                    </p>
                </div>

            </div>

        </section>
        
        <section className={styles.ContainerOpportunity}>
            <span>Oportunidade</span>
            <h3>
            O stress financeiro dos colaboradores<br/>
            Impacta na saúde da sua empresa
            </h3>
            <p>
            As dificuldades financeiras afetam 42% dos colaboradores, resultando em
             <br/>queda de desempenho, problemas de retenção e aumento de custos
            </p>
            <div className={styles.ContainerOpportunityBox}>
                <div>
                    <span>10x</span>
                    <p>
                    mais chances de um colaborador não conseguir terminar suas tarefas por causa de estresse financeiro
                    </p>
                </div>
                <div>
                    <span>18%</span>
                    <p>
                    mais chances de funcionários desmotivados buscarem um novo emprego com melhores benefícios
                    </p>
                </div>
                <div>
                    <span>2x</span>
                    <p>
                    mais chances de funcionários desmotivados buscarem um novo emprego com melhores benefícios
                    </p>
                </div>
            </div>
        </section>

        </>
    )
}

export default HomeMain