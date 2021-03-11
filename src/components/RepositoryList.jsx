import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'inform',
  description: 'forms in React',
  link: 'https://google.com'
}

export function RepositoryList() {
  return (
    <section className="respository-list">
      <h1>Lista de respositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}