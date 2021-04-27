import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

import { api } from "../../services/api"

import { Container } from '../../styles/pages/name'

interface NameProps {
  name: string
}

export default function Name({ name }: NameProps) {
  const router = useRouter()

  function returnLink(name: string) {
    return `https://myappnames.page.link/?link=https://www.instagram.com/?name=${name}&apn=com.myappnames&afl=https://play.google.com/store/apps/details?id%3Dcom.instagram.android%26hl%3Dpt_BR%26gl%3DUS`
  }

  function handleShareName() {
    const link = returnLink(name)

    router.push(link)
  }

  return (
    <>
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
  const { name } = response.data

  return {
    props: {
      name
    }
  }
}
