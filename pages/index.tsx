import type { GetStaticProps, NextPage } from 'next';
import React, { FormEvent, useCallback, useState } from 'react';
import InputMask from '../src/components/InputMask';
import { api } from '../services/api';

import Container  from './styles'
import Head from 'next/head';


interface Usuario extends String {
  cep: string;
}

interface DadosConsultados {
  cep: string;
  cidade: string;
  estado_info: {
    nome: string;
  },
  bairro: string;
  logradouro: string;
}



const Home: NextPage = () => {
  
  const [cepFinal, setCepFinal] = useState<String>('' as String);

  const [cepUsuario, setCepUsuario] = useState<Usuario>({} as Usuario);

  const [cepConsultado, setCepConsultado] = useState<DadosConsultados>();

  const [errorConsulta, setErrorConsulta] = useState(false);

  let cepConsultaApi: String = '';

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setCepUsuario({
      ...cepUsuario,
      [e.currentTarget.name]: e.currentTarget.value
    })

  }, [cepUsuario])
  


  const consultarCep = (event: FormEvent) => {

      event.preventDefault();
      setErrorConsulta(false)

      cepConsultaApi = cepUsuario.cep.replace('-', '');

      api.get(`/${cepConsultaApi}`)
      .then((response) => 
      setCepConsultado(() => response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
        setErrorConsulta(true)
      }
      )

      setCepFinal(() => cepUsuario.cep)
  }


  return (
    <>
      <Head>
        <title>O CEP Existe?</title>
        <meta name="description" content="Descubra se um determinado CEP existe, e quais informações estão vinculadas a ele." />
      </Head>
      <Container>
        <header>
          <h1>O CEP Existe?</h1>
        </header>

      <main>
        <form onSubmit={consultarCep}>
          <InputMask
          name="cep" 
          type="text" 
          minLength={9}
          maxLength={9}
          placeholder="00000-000" 
          onChange={handleChange} 
          />
          <button type="submit" >
            Consultar<img src="/images/search.svg" /></button>
        </form>

            {cepConsultado && !errorConsulta && (<div className='resultConsult'>
              <p>O CEP <b>{cepFinal}</b> existe!</p>
                <table>
                  <tbody>
                    <tr>
                      <th>Cidade:</th>
                      <td>{cepConsultado.cidade}</td>
                    </tr>
                    <tr>
                      <th>Estado:</th>
                      <td>{cepConsultado.estado_info.nome}</td>
                    </tr>
                    <tr>
                      <th>Bairro:</th>
                      <td>{cepConsultado.bairro ? cepConsultado.bairro : "Não encontrado"}</td>
                    </tr>
                    <tr>
                      <th>Logradouro:</th>
                      <td>{cepConsultado.logradouro ? cepConsultado.logradouro : "Não encontrado"}</td>
                    </tr>
                  </tbody>
                </table></div>)}

              {errorConsulta && (
                <div className='resultConsult'>
                <p className='cepError'>O CEP <b>{cepFinal}</b> não existe!</p>
                </div>
              )}

        
      </main>

                <footer>
                  <p>Entre em contato</p>
                  <div className='socialLinks'>
                    <a href='https://github.com/linscarlos' target="_blank" rel='noreferrer'>
                      <svg className="svg github" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="github" d="M10 0C4.475 0 1.45954e-06 4.475 1.45954e-06 10C-0.00113276 12.0993 0.658815 14.1456 1.88622 15.8487C3.11362 17.5517 4.84615 18.8251 6.838 19.488C7.338 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.988 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.787C4.575 6.537 4.225 5.512 4.775 4.137C4.775 4.137 5.612 3.875 7.525 5.163C8.33906 4.93706 9.18017 4.82334 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.437 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.173 18.8168 16.8979 17.541 18.1199 15.8392C19.3419 14.1373 19.9994 12.0951 20 10C20 4.475 15.525 0 10 0Z" fill="#5243C2" />
                      </svg>
                    </a>
                    <a href='https://www.linkedin.com/in/lins-carlos' target="_blank" rel='noreferrer'>
                      <svg className="svg likedin" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="likedin" d="M15.335 15.339H12.67V11.162C12.67 10.166 12.65 8.884 11.28 8.884C9.891 8.884 9.679 9.968 9.679 11.089V15.339H7.013V6.75H9.573V7.92H9.608C9.966 7.246 10.836 6.533 12.136 6.533C14.836 6.533 15.336 8.311 15.336 10.624V15.339H15.335ZM4.003 5.575C3.79956 5.57526 3.59806 5.53537 3.41006 5.45761C3.22207 5.37984 3.05127 5.26574 2.90746 5.12184C2.76365 4.97793 2.64965 4.80706 2.57201 4.61901C2.49437 4.43097 2.4546 4.22944 2.455 4.026C2.4552 3.71983 2.54618 3.4206 2.71644 3.16615C2.8867 2.91169 3.12859 2.71343 3.41153 2.59645C3.69447 2.47947 4.00574 2.44902 4.30598 2.50894C4.60622 2.56886 4.88196 2.71648 5.09831 2.93311C5.31466 3.14974 5.46191 3.42566 5.52145 3.72598C5.58099 4.0263 5.55013 4.33753 5.43278 4.62032C5.31543 4.9031 5.11687 5.14474 4.86219 5.31467C4.60751 5.4846 4.30817 5.5752 4.002 5.575H4.003ZM5.339 15.339H2.666V6.75H5.34V15.339H5.339ZM16.67 0H1.329C0.593 0 0 0.58 0 1.297V16.703C0 17.42 0.594 18 1.328 18H16.666C17.4 18 18 17.42 18 16.703V1.297C18 0.58 17.4 0 16.666 0H16.669H16.67Z" fill="#5243C2"/>
                      </svg>
                    </a>
                    <a href='https://instagram.com/carlinhos.lins7' target="_blank" rel='noreferrer'>
                      <svg className="svg instagram" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="instagram" d="M10 0C12.717 0 13.056 0.00999994 14.122 0.0599999C15.187 0.11 15.912 0.277 16.55 0.525C17.21 0.779 17.766 1.123 18.322 1.678C18.8305 2.1779 19.224 2.78259 19.475 3.45C19.722 4.087 19.89 4.813 19.94 5.878C19.987 6.944 20 7.283 20 10C20 12.717 19.99 13.056 19.94 14.122C19.89 15.187 19.722 15.912 19.475 16.55C19.2247 17.2178 18.8311 17.8226 18.322 18.322C17.822 18.8303 17.2173 19.2238 16.55 19.475C15.913 19.722 15.187 19.89 14.122 19.94C13.056 19.987 12.717 20 10 20C7.283 20 6.944 19.99 5.878 19.94C4.813 19.89 4.088 19.722 3.45 19.475C2.78233 19.2245 2.17753 18.8309 1.678 18.322C1.16941 17.8222 0.775931 17.2175 0.525 16.55C0.277 15.913 0.11 15.187 0.0599999 14.122C0.0129999 13.056 0 12.717 0 10C0 7.283 0.00999994 6.944 0.0599999 5.878C0.11 4.812 0.277 4.088 0.525 3.45C0.775236 2.78218 1.1688 2.17732 1.678 1.678C2.17767 1.16923 2.78243 0.775729 3.45 0.525C4.088 0.277 4.812 0.11 5.878 0.0599999C6.944 0.0129999 7.283 0 10 0ZM10 5C8.67392 5 7.40215 5.52678 6.46447 6.46447C5.52678 7.40215 5 8.67392 5 10C5 11.3261 5.52678 12.5979 6.46447 13.5355C7.40215 14.4732 8.67392 15 10 15C11.3261 15 12.5979 14.4732 13.5355 13.5355C14.4732 12.5979 15 11.3261 15 10C15 8.67392 14.4732 7.40215 13.5355 6.46447C12.5979 5.52678 11.3261 5 10 5ZM16.5 4.75C16.5 4.41848 16.3683 4.10054 16.1339 3.86612C15.8995 3.6317 15.5815 3.5 15.25 3.5C14.9185 3.5 14.6005 3.6317 14.3661 3.86612C14.1317 4.10054 14 4.41848 14 4.75C14 5.08152 14.1317 5.39946 14.3661 5.63388C14.6005 5.8683 14.9185 6 15.25 6C15.5815 6 15.8995 5.8683 16.1339 5.63388C16.3683 5.39946 16.5 5.08152 16.5 4.75ZM10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7Z" fill="#5243C2"/>
                      </svg>
                    </a>
                  </div>
                </footer>

      </Container>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {},
    revalidate: 60 * 60 * 24  * 364, // 24 Hours
  }
}

export default Home
