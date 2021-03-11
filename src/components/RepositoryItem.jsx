export function RepositoryItem({ 
  repository: { name, description, link } 
}) {
  return (
    <li>
      <strong>{ name }</strong>
      <p>{ description }</p>
      <a href={ link } target="blank">Acessar repositório</a>
    </li>
  )
}