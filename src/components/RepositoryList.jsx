import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'inform',
  description: 'forms in React',
  link: 'https://google.com',
}

export function RepositoryList() {
  return (
    <section className="repositories-list">
      <h1>Lista de respositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}