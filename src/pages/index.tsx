import { GetServerSideProps } from "next"
import Link from 'next/link'
import { useState } from "react"
import Head from 'next/head'

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import { api } from '../services/api'
import { Container } from '../styles/pages/home'

interface NamesProps {
  id: string
  name: string
}

interface HomeProps {
  names: NamesProps[]
}

export default function Home({ names }: HomeProps) {
  const [inputName, setInputName] = useState('')
  const [namesRepo, setNamesRepo] = useState<NamesProps[]>(names)

  async function handleAddName() {
    if(inputName === '') {
      toast.error('Enter a valid name', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return
    }

    try {
      const response = await api.post('/names', {
        name: inputName
      })
  
      setInputName('')
      setNamesRepo([...namesRepo, response.data])

      toast.success('Name added successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch {
      toast.error('Error adding name!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <Head>
        <title>My App Names | Home</title>
      </Head>
      <ToastContainer />
      <Container>
      <h1>My App Names</h1>

      <ul>
        {
          namesRepo.map(name => (
            <li key={name.id}>
              <Link href={`/name/${name.id}`}>
                <a>{name.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>

      <div>
        <input
          placeholder="Write the name"
          type="text"
          onChange={(event) => setInputName(event.target.value)}
          value={inputName}
        />
        <button
          type="button"
          onClick={handleAddName}
        >
          Create
        </button>
      </div>
    </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/names')

  return {
    props: {
      names: response.data
    }
  }
}
