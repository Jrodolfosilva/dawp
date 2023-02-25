import next from "next";
import styles from "../../styles/home.module.css";


const Home=()=>{


    return(
        <>
        <section className={styles.ContainerHome}>
         <div className={styles.ContainerContent}>
            <h1>
            Suporte financeiro pro seu colaborador, resultado para a sua empresa
            </h1>
            <span></span>
            <p>
            Consultoria financeira e uma rede de soluções que resolvem os problemas da vida real e garantem bem-estar dentro e fora do trabalho
            </p>
            <div>
                <button>SOU RH E QUERO</button>
                <button>QUERO INDICAR PRO MEU RG</button>
            </div>
         </div>
         <div className={styles.Containercreative}>
            <img src="https://somosleve.com.br/wp-content/themes/Leve_2023/img/banner.png" alt="img" />
         </div>
        </section>

        <section className={styles.ContainerAbout}>

            <div className={styles.AboutCreative}>
                <img src="https://somosleve.com.br/wp-content/themes/Leve_2023/img/img-mao-celular.jpg" alt="imagem com efeito de movimento" />

            </div>

            <div className={styles.AboutContent}>
                <span>Quem Somos</span>
                <h2>Um plano de saúde financeira na palma da mão do colaborador</h2>
                <div>
                    <img src="" alt="iconlogo" />
                    <p>
                        Oferecemos consultoria financeira para ajudar os colaboradores a superar desafios e realizar sonhos
                    </p>
                </div>
                <div>
                    <img src="" alt="iconlogo" />
                    <p>
                        Diagnosticamos a raiz dos problemas financeiros e entregamos a melhor solução para cada caso
                    </p>
                </div>
                <div>
                    <img src="" alt="iconlogo" />
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

export default Home