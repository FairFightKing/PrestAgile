import { LinkComponent } from './navigation/LinkComponent'

export default function Header() {
  return (
    <div>
      <h1>Prestagile</h1>
      <div>
        <LinkComponent
          target="/register"
          child={<button color="primary">Inscription</button>}
        />
        <LinkComponent
          target="/login"
          child={<button color="primary">Connexion</button>}
        />
      </div>
    </div>
  )
}
