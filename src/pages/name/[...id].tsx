import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import Head from 'next/head'

import { api } from "../../services/api"

import { Container } from '../../styles/pages/name'

interface NameProps {
  name: string
  idResponse: string
}

export default function Name({ name, idResponse }: NameProps) {
  const router = useRouter()

  function returnLink(id: string) {
    return `https://myappnames.page.link/?link=${process.env.NEXT_PUBLIC_APP_URL}/name/${id}`
  }

  function handleShareName() {
    const link = returnLink(idResponse)

    router.push(link)
  }

  return (
    <>
      <Head>
        <title>My App Names | {name}</title>
      </Head>
      <Container>
        <div>
          <Link href="/">
            <a>
              <img src="/arrow-left.svg" alt="Go Back"/>
              Go Back
            </a>
          </Link>
        </div>
        <h1>This page is for {name}</h1>
        <button
          type="button"
          onClick={handleShareName}
        >
          Share
        </button>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params

  const response = await api.get(`/names/${id}`)
  const { name, id: idResponse } = response.data

  return {
    props: {
      name,
      idResponse
    }
  }
}
