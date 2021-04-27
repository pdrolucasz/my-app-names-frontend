import { GetServerSideProps } from "next"
import Link from "next/link"

import { Container } from '../../styles/pages/name'

interface NameProps {
    name: string
}

export default function Name({ name }: NameProps) {
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
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { name } = params

  return {
    props: {
      name
    }
  }
}
